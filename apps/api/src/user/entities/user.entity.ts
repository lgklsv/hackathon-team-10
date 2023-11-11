import { Exclude } from 'class-transformer';
import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
  hashedRt: { type: String, required: false },
});

export class User implements IUser {
  _id: string;

  login: string;

  @Exclude()
  password: string;

  @Exclude()
  hashedRt: string;
}
