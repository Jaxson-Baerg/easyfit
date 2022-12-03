const express = require('express');
const router = express.Router();

const { getAllStudentsPerClass } = require('../db/queries/classStudentsQueries');

require('dotenv').config();

// Get all class types
router.get('/', async (req, res) => {
  res.json(process.env.ADMIN_PASS);
});

router.get('/spots/:class_id', async (req, res) => {
  try {
    const students = await getAllStudentsPerClass(Number(req.params.class_id));
    res.json(students);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
