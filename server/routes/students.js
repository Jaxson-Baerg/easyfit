const express = require('express');
const router = express.Router();
const { getStudents, getStudentById, updateStudent } = require('../db/queries/studentQueries');

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    const students = await getStudents();
    res.json(students);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const student = await getStudentById(Number(req.params.id));
    res.json(student);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const student = await updateStudent(Number(req.params.id), req.query);
    res.json(student);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
})

module.exports = router;
