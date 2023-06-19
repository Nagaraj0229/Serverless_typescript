import mongoose, { Mongoose } from 'mongoose';
import { Student, IStudent } from '../schema/student_schema';
import { studentData } from '@functions/services/interfaces/student.interface';
const MONGODB_URI: string = process.env.MONGODB_URI;
let mongodbClient: Mongoose | undefined;

const MongoDB = async (): Promise<Mongoose> => {
  if (!mongodbClient) {
    mongodbClient= await mongoose.connect(MONGODB_URI)
    console.log('Successfully connected to MongoDB');
  }
  return mongodbClient;
};

export const postStudent = async (payload: studentData): Promise<IStudent> => {
  await MongoDB();
  const student = new Student(payload);
  return await student.save();
};

export const getAllStudents = async (): Promise<IStudent[]> => {
  await MongoDB();
  const students = await Student.find().exec();
  return students;
};
export const getStudentById = async (id: string): Promise<IStudent | null> => {
  await MongoDB();
  const student = await Student.findById(id).exec();
  return student;
};

export const updateStudentById = async (id: string, updatedData: Partial<IStudent>): Promise<IStudent | null> => {
  await MongoDB();
  const student = await Student.findByIdAndUpdate(id, { $set: updatedData }, { new: true }).exec();
  return student;
};

export const deleteContactById = async (id: string): Promise<IStudent | null> => {
  await MongoDB();
  const student = await Student.findByIdAndDelete(id).exec();
  return student;
};
