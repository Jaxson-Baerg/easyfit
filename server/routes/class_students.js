const express = require('express');
const router = express.Router();
const { getAllClassesPerStudent, getAllStudentsPerClass, registerStudent, cancelRegistration } = require('../db/queries/classStudentsQueries');
const { getClassList, getStudentList } = require('../helpers/classHelpers');

router.get('/classes/:id', async (req, res) => {
  try {
    const classIds = await getAllClassesPerStudent(Number(req.params.id));
    const classes = await getClassList(classIds);
    res.json(classes);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/students/:id', async (req, res) => {
  try {
    const studentIds = await getAllStudentsPerClass(Number(req.params.id));
    const students = await getStudentList(studentIds);
    res.json(students);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/:class_id/:student_id', async (req, res) => {
  try {
    const classStudent = await registerStudent(Number(req.params.class_id), Number(req.params.student_id));
    res.json(classStudent);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

router.delete('/:class_id/:student_id', async (req, res) => {
  try {
    const classStudent = await cancelRegistration(Number(req.params.class_id), Number(req.params.student_id));
    res.json(classStudent);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
