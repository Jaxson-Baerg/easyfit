const db = require('../index');

const getStudents = async () => {
  const data = await db.query('SELECT first_name, last_name, email, credits FROM students;');
  return data.rows;
};

const getStudentById = async (id) => {
  const queryDef = {
    text: 'SELECT student_id, first_name, last_name, email, credits FROM students WHERE student_id = $1;',
    values: [id]
  };

  const data = await db.query(queryDef);
  return data.rows;
};

const getStudentCodeById = async (id) => {
  const queryDef = {
    text: 'SELECT unique_code FROM students WHERE student_id = $1;',
    values: [id]
  };

  const data = await db.query(queryDef);
  return data.rows;
};

const updateStudent = async (student_id, studentInfo) => {

  const setColumns = Object.keys(studentInfo).map((property, index) => `${property}=$${index + 2}`).join(', ');

  const queryDef = {
    text: `UPDATE students SET ${setColumns} WHERE student_id = $1 RETURNING *;`,
    values: [student_id, ...Object.values(studentInfo)]
  };

  const data = await db.query(queryDef);
  return data.rows;
};

module.exports = {
  getStudents,
  getStudentById,
  getStudentCodeById,
  updateStudent
};
