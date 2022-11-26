const db = require('../index');

const getStudents = async () => {
  const data = await db.query('SELECT * FROM students');
  return data.rows;
};

const getStudentById = async (id) => {
  const queryDef = {
    text: 'SELECT * FROM students WHERE student_id = $1',
    values: [id]
  };

  const data = await db.query(queryDef);
  return data.rows;
};

module.exports = {
  getStudents,
  getStudentById
};
