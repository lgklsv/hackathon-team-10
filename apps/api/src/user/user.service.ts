import * as bcrypt from 'bcryptjs';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const hash = await bcrypt.hash(
      createUserDto.password,
      +process.env.CRYPT_SALT,
    );

    const user = await this.userModel.create({
      login: createUserDto.login,
      password: hash,
    });

    return plainToInstance(User, user);
  }

  async findAll() {
    const users = await this.userModel.find();
    return plainToInstance(User, users);
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) return user;
    return plainToInstance(User, user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findById(id);
    if (!user) return user;

    const oldPasswordValid = await bcrypt.compare(
      updateUserDto.oldPassword,
      user.password,
    );
    if (!oldPasswordValid) {
      throw new ForbiddenException('Old password is wrong');
    }

    const hash = await bcrypt.hash(
      updateUserDto.newPassword,
      +process.env.CRYPT_SALT,
    );

    const updatedUser = this.userModel.findByIdAndUpdate(id, {
      password: hash,
    });

    return plainToInstance(User, updatedUser);
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
