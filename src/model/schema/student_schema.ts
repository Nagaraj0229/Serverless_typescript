import { Document, model, Schema } from 'mongoose';

export interface IStudent extends Document {
  firstName: String;
  lastName: String;
  rollNumber: Number;
  phoneNumber: Number;
  email: String;
}

const studentSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  rollNumber: {
    type: Number,
    required: [true, 'Roll number is required'],
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, 'Phone number is required'],
    validate: {
      validator: function (v: string) {
        return /\d{10}/.test(v);
      },
      message: 'Invalid phone number',
    },
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: function (v: string) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: 'Invalid email address',
    },
  },
});

export const Student = model<IStudent>('Student', studentSchema);
