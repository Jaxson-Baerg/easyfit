const { getClassesById } = require('../db/queries/classQueries');

const getClassList = async (classIds) => {
  classes = [];
  for (classId of classIds) {
    const classList = await getClassesById(Number(classId.class_id));
    classes.push(classList[0]);
  }
  return classes;
};

module.exports = { getClassList }