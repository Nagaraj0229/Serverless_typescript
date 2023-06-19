import {
  studentSchema,
  studentsListSchema,
  studentsReadSchema,
  updateStudentSchema,
  deleteContactsSchema,
} from './Validators/schema';
import { handlerPath } from '@libs/handler-resolver';

export const student = {
  handler: `${handlerPath(__dirname)}/handler.createStudentData`,
  events: [
    {
      http: {
        method: 'post',
        path: 'createStudentData',
        request: {
          schemas: {
            'application/json': studentSchema,
          },
        },
      },
    },
  ],
};

export const studentsList = {
  handler: `${handlerPath(__dirname)}/handler.listStudentData`,
  events: [
    {
      http: {
        method: 'get',
        path: 'listStudentData',
        request: {
          schemas: {
            'application/json': studentsListSchema,
          },
        },
      },
    },
  ],
};
export const studentsRead = {
  handler: `${handlerPath(__dirname)}/handler.readStudentData`,
  events: [
    {
      http: {
        method: 'get',
        path: 'readStudentData/{id}',
        request: {
          schemas: {
            'application/json': studentsReadSchema,
          },
          parameters: {
            paths: {
              id: true,
            },
          },
        },
      },
    },
  ],
};
export const updateStudent = {
  handler: `${handlerPath(__dirname)}/handler.updateStudentData`,
  events: [
    {
      http: {
        method: 'patch',
        path: 'updateStudentData/{id}',
        request: {
          schemas: {
            'application/json': updateStudentSchema,
          },
          parameters: {
            paths: {
              id: true,
            },
            'application/json': updateStudentSchema,
          },
        },
      },
    },
  ],
};
export const deleteContacts = {
  handler: `${handlerPath(__dirname)}/handler.deleteStudentData`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'deleteStudentData/{id}',
        request: {
          schemas: {
            'application/json': deleteContactsSchema,
          },
          parameters: {
            paths: {
              id: true,
            },
          },
        },
      },
    },
  ],
};
