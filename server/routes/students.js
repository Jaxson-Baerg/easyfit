const express = require('express');
const router = express.Router();
const { getStudents, getStudentByEmail, getStudentById, updateStudent } = require('../db/queries/studentQueries');
const { getAllClassesPerStudent } = require('../db/queries/classStudentsQueries');
const { getClassList, getClassTypeList } = require('../helpers/classHelpers');

// Get a list of all students in database
router.get('/', async (req, res) => {
  try {
    const students = await getStudents();
    res.json(students);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/logout', (req, res) => {
  req.session = null;
  res.redirect('../../');
});

// Get a student by their email
router.get('/email/:email', async (req, res) => {
  try {
    const student = await getStudentByEmail(req.params.email);
    res.json(student);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Get a student by their id
router.get('/:id', async (req, res) => {
  try {
    const student = await getStudentById(Number(req.params.id));
    res.json(student);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Update a student's information
router.put('/:id', async (req, res) => {
  try {
    const student = await updateStudent(Number(req.params.id), req.query);
    res.json(student);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Get all classes that a student is registered for
router.get('/:id/classes', async (req, res) => {
  try {
    const classIds = await getAllClassesPerStudent(Number(req.params.id)); // Get all class ids
    const classesInc = await getClassList(classIds); // Get all class objects
    const classesCom = await getClassTypeList(classesInc); // Append all class type data onto class objects
    res.json(classesCom);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
