const express = require('express');
const router = express.Router();
const { getClassesById, getClassesByClassType } = require('../db/queries/classQueries');
const { getAllStudentsPerClass, registerStudent, cancelRegistration } = require('../db/queries/classStudentsQueries');
const { getStudentList } = require('../helpers/classHelpers');

// Get a single class by its id
router.get('/:id', async (req, res) => {
  try {
    const classes = await getClassesById(Number(req.params.id));
    res.json(classes);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Get a list of classes by the type
router.get('/type/:id', async (req, res) => {
  try {
    const classes = await getClassesByClassType(Number(req.params.id));
    res.json(classes);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Get a list of students that are registered in a class
router.get('/:id/students', async (req, res) => {
  try {
    const studentIds = await getAllStudentsPerClass(Number(req.params.id)); // Get list of student ids
    const students = await getStudentList(studentIds); // Get student objects based on ids
    res.json(students);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Register the logged in user for a class
router.post('/:class_id/register', async (req, res) => {
  try {
    const classStudent = await registerStudent(Number(req.params.class_id), Number(req.query.student_id));
    res.json(classStudent);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Unregister a user for a class
router.delete('/:class_id/register', async (req, res) => {
  try {
    const classStudent = await cancelRegistration(Number(req.params.class_id), Number(req.query.student_id));
    res.json(classStudent);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
