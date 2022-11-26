const db = require('../index');

const getAllClassesPerStudent = async (student_id) => {
  const queryDef = {
    text: 'SELECT * FROM class_students WHERE student_id = $1',
    values: [student_id]
  };

  const data = await db.query(queryDef);
  return data.rows;
};

module.exports = {
  getAllClassesPerStudent
};
