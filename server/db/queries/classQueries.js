const db = require('../index');

const getClasses = async () => {
  const data = await db.query('SELECT * FROM classes;');
  return data.rows;
};

const getClassesById = async (class_id) => {
  const queryDef = {
    text: 'SELECT * FROM classes WHERE class_id = $1;',
    values: [class_id]
  };

  const data = await db.query(queryDef);
  return data.rows;
};

const getClassesByClassType = async (class_type_id) => {
  const queryDef = {
    text: 'SELECT * FROM classes WHERE class_type_id = $1;',
    values: [class_type_id]
  };

  const data = await db.query(queryDef);
  return data.rows;
};

module.exports = {
  getClasses,
  getClassesById,
  getClassesByClassType
};
