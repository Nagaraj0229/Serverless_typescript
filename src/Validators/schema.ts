export const studentSchema = {
  type: 'Object',
  properties: {
    firstName: { type: 'String' },
    lastName: { type: 'String' },
    email: { type: 'String' },
    phoneNumber: { type: 'Number' },
    rollNumber: { type: 'Number' },
  },
  required: ['firstName', 'lastName', 'rollNumber', 'phoneNumber', 'email'],
} as const;

export const studentsListSchema = {
  type: 'Object',
  properties: {
    firstName: { type: 'String' },
    lastName: { type: 'String' },
    rollNumber: { type: 'Number' },
    phoneNumber: { type: 'Number' },
    email: { type: 'String' },
  },
  required: ['firstName', 'lastName', 'rollNumber', 'phoneNumber', 'email'],
} as const;

export const studentsReadSchema = {
  type: 'Object',
  properties: {
    firstName: { type: 'String' },
    lastName: { type: 'String' },
    rollNumber: { type: 'Number' },
    phoneNumber: { type: 'Number' },
    email: { type: 'String' },
  },
  required: ['firstName', 'lastName', 'rollNumber', 'phoneNumber', 'email'],
} as const;

export const updateStudentSchema = {
  type: 'Object',
  properties: {
    firstName: { type: 'String' },
    lastName: { type: 'String' },
    rollNumber: { type: 'Number' },
    phoneNumber: { type: 'Number' },
    email: { type: 'String' },
  },
  required: ['firstName', 'lastName', 'rollNumber', 'phoneNumber', 'email'],
} as const;

export const deleteContactsSchema = {
  type: 'Object',
  properties: {
    firstName: { type: 'String' },
    lastName: { type: 'String' },
    rollNumber: { type: 'Number' },
    phoneNumber: { type: 'Number' },
    email: { type: 'String' },
  },
  required: ['firstName', 'lastName', 'rollNumber', 'phoneNumber', 'email'],
} as const;
