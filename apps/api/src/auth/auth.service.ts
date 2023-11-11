import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from 'src/user/dto';
import { User } from 'src/user/entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signup(userDto: CreateUserDto) {
    const hash = await this.hashData(userDto.password);

    const user = await this.userModel.create({
      login: userDto.login,
      password: hash,
    });
    const tokens = await this.getTokens(user._id, user.login);
    await this.updateRtHash(user._id, tokens.refreshToken);
    return plainToInstance(User, user);
  }

  async login(userDto: CreateUserDto): Promise<Tokens> {
    const user = await this.userModel.findOne({
      login: userDto.login,
    });

    if (!user) throw new ForbiddenException('Access Denied!');

    const passwordMatches = await bcrypt.compare(
      userDto.password,
      user.password,
    );

    if (!passwordMatches) throw new ForbiddenException('Access Denied!');

    const tokens = await this.getTokens(user._id, user.login);
    await this.updateRtHash(user._id, tokens.refreshToken);
    return tokens;
  }

  async refresh(rt: string) {
    if (!rt) {
      throw new UnauthorizedException('No refresh token provided in body');
    }

    const isTokenValid = await this.verifyRt(rt);

    if (!isTokenValid)
      throw new ForbiddenException('Refresh token is invalid or expired');

    const { sub } = this.jwtService.decode(rt);

    const user = await this.userModel.findById(sub);

    if (!user) throw new ForbiddenException('Access Denied!');

    const rtMatches = await bcrypt.compare(rt, user.hashedRt);

    if (!rtMatches) throw new ForbiddenException('Access Denied!');

    const tokens = await this.getTokens(user._id, user.login);
    await this.updateRtHash(user._id, tokens.refreshToken);
    return tokens;
  }

  async updateRtHash(userId: string, rt: string) {
    const hash = await this.hashData(rt);
    await this.userModel.findByIdAndUpdate(userId, {
      hashedRt: hash,
    });
  }

  // Utility functions
  async hashData(data: string) {
    return bcrypt.hash(data, +process.env.CRYPT_SALT);
  }

  async getTokens(userId: string, login: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, login },
        {
          secret: process.env.JWT_SECRET_KEY,
          expiresIn: process.env.TOKEN_EXPIRE_TIME,
        },
      ),
      this.jwtService.signAsync(
        { sub: userId, login },
        {
          secret: process.env.JWT_SECRET_REFRESH_KEY,
          expiresIn: process.env.TOKEN_REFRESH_EXPIRE_TIME,
        },
      ),
    ]);

    return {
      accessToken: at,
      refreshToken: rt,
    };
  }

  async verifyRt(rt: string): Promise<boolean> {
    try {
      const isValid = await this.jwtService.verifyAsync(rt, {
        secret: process.env.JWT_SECRET_REFRESH_KEY,
      });

      return isValid;
    } catch (error) {
      return false;
    }
  }
}
