import * as mongoose from 'mongoose';

export const TestSchema = new mongoose.Schema({
  message: { type: String, required: true },
});

export interface Test {
  id: string;
  message: string;
}

export class Test {}
