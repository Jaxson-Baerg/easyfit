const { getClassesById } = require('../db/queries/classQueries');
const { getStudentById } = require('../db/queries/studentQueries');
const { getClassTypeById } = require('../db/queries/classTypeQueries');

// Get class objects from list of class ids
const getClassList = async (classIds) => {
  const classes = [];
  for (classId of classIds) {
    const classList = await getClassesById(Number(classId.class_id));
    classes.push(classList[0]);
  }
  return classes;
};

// Get student objects from list of student ids
const getStudentList = async (studentIds) => {
  const students = [];
  for (studentId of studentIds) {
    const studentList = await getStudentById(Number(studentId.student_id));
    students.push(studentList[0]);
  }
  return students;
};

// Append class type data with class data
const getClassTypeList = async (classList) => {
  const classes = [];
  for (let c of classList) {
    const classType = await getClassTypeById(c.class_type_id);

    c = {
      ...c,
      name: classType[0].name,
      description: classType[0].description
    };
    classes.push(c);
  };
  return classes;
}

module.exports = { getClassList, getStudentList, getClassTypeList };