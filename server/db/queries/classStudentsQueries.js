const db = require('../index');

const getAllClassesPerStudent = async (student_id) => {
  const queryDef = {
    text: 'SELECT * FROM class_students WHERE student_id = $1;',
    values: [student_id]
  };

  const data = await db.query(queryDef);
  return data.rows;
};

const registerStudent = async (student_id, class_id) => {
  const queryDef = {
    text: 'INSERT INTO class_student (class_id, student_id) VALUES ($1, $2);',
    values: [student_id, class_id]
  };

  const data = await db.query(queryDef);
  return data.rows;
};

const cancelRegistration = async (student_id, class_id) => {
  const queryDef = {
    text: 'DELETE FROM class_students WHERE student_id = $1 AND class_id = $2 RETURNING *;',
    values: [student_id, class_id]
  };

  const data = await db.query(queryDef);
  return data.rows;
};

module.exports = {
  getAllClassesPerStudent,
  registerStudent,
  cancelRegistration
};
