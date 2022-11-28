const { getClassesById } = require('../db/queries/classQueries');
const { getStudentById } = require('../db/queries/studentQueries');

const getClassList = async (classIds) => {
  classes = [];
  for (classId of classIds) {
    const classList = await getClassesById(Number(classId.class_id));
    classes.push(classList[0]);
  }
  return classes;
};

const getStudentList = async (studentIds) => {
  students = [];
  for (studentId of studentIds) {
    const studentList = await getStudentById(Number(studentId.student_id));
    students.push(studentList[0]);
  }
  return students;
};

module.exports = { getClassList, getStudentList };