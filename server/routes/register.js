const express = require('express');
const router = express.Router();
const { addStudent } = require('../db/queries/studentQueries');

router.post('/', async (req, res) => {
  const { first_name, last_name, email } = req.body;
    try {
      const student = await addStudent(first_name, last_name, email);
      req.session["student_id"] = student.student_id;
      console.log(req.session);
      res.redirect('http://localhost:3000/');
    } catch(e) {
      res.status(500).json({ error: e.message });
    }
});

module.exports = router;