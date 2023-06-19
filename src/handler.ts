import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { sendErrorResponse, sendSuccessResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { createStudent, getStudents, getStudent, updateStudent, deleteContact } from './services/student';
import {
  studentSchema,
  studentsListSchema,
  studentsReadSchema,
  updateStudentSchema,
  deleteContactsSchema,
} from './Validators/schema';

const student: ValidatedEventAPIGatewayProxyEvent<typeof studentSchema> = async (_event) => {
  console.log('student');
  try {
    const newStudent = await createStudent(_event.body);
    return sendSuccessResponse(newStudent);
  } catch (e) {
    console.log(e.message);
    return sendErrorResponse(e.message);
  }
};

const studentsList: ValidatedEventAPIGatewayProxyEvent<typeof studentsListSchema> = async (_event) => {
  console.log('studentsList');
  try {
    const students = await getStudents();
    return sendSuccessResponse(students);
  } catch (e) {
    console.log(e.message);
    return sendErrorResponse(e.message);
  }
};

const studentRead: ValidatedEventAPIGatewayProxyEvent<typeof studentsReadSchema> = async (event) => {
  console.log('studentRead');
  const studentId = event?.pathParameters?.id;
  try {
    const student = await getStudent(studentId);
    console.log(student);
    return sendSuccessResponse(student);
  } catch (e) {
    console.log(e.message);
    return sendErrorResponse(e.message);
  }
};

const updateStudents: ValidatedEventAPIGatewayProxyEvent<typeof updateStudentSchema> = async (event) => {
  console.log('updateStudent');
  const updateId = event?.pathParameters?.id;
  try {
    const student = await updateStudent(updateId, event.body);
    return sendSuccessResponse(student);
  } catch (error) {
    console.log(error.message);
    return sendErrorResponse(error.message);
  }
};

const deleteContacts: ValidatedEventAPIGatewayProxyEvent<typeof deleteContactsSchema> = async (event) => {
  console.log('deleteContacts');
  const deleteId = event?.pathParameters?.id;
  try {
    const student = await deleteContact(deleteId);
    return sendSuccessResponse(student);
  } catch (error) {
    console.log(error.message);
    return sendErrorResponse(error.message);
  }
};

export const createStudentData = middyfy(student);
export const listStudentData = middyfy(studentsList);
export const readStudentData = middyfy(studentRead);
export const updateStudentData = middyfy(updateStudents);
export const deleteStudentData = middyfy(deleteContacts);
