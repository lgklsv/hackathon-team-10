import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from './entities/test.entity';

@Injectable()
export class TestService {
  constructor(@InjectModel('Test') private readonly testModel: Model<Test>) {}

  async create(createTestDto: CreateTestDto) {
    const newTest = new this.testModel(createTestDto);
    const res = await newTest.save();
    return res;
  }

  async findAll() {
    const res = await this.testModel.find();
    return res;
  }

  async findOne(id: string) {
    const res = await this.testModel.findById(id);
    return res;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
