import { IStudent } from '@functions/model/schema/student_schema';
import {
  postStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteContactById,
} from '../model/mongodb/mongoose';
import { studentData } from './interfaces/student.interface';

export const createStudent = async (data: studentData) => {
  console.log('createStudent');
  const student: studentData = { ...data};
  console.log(student);
  const studentDocument = await postStudent(student);
  return studentDocument;
};

export const getStudents = async () => {
  console.log('getStudents');
  const students = await getAllStudents();
  console.log(students);
  return students;
};

export const getStudent = async (id: string) => {
  console.log('getStudent');
  const student = await getStudentById(id);
  console.log(student);
  return student;
};

export const updateStudent = async (id: string, data: Partial<IStudent>) => {
  console.log('getStudent');
  const student = await updateStudentById(id, data);
  console.log(student);
  return student;
};

export const deleteContact = async (id: string) => {
  console.log('getStudent');
  const student = await deleteContactById(id);
  console.log(student);
  return student;
};
