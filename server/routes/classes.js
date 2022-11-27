const express = require('express');
const router = express.Router();
const { getClassesById, getClassesByClassType } = require('../db/queries/classQueries');

/* GET home page. */
router.get('/:id', async (req, res) => {
  try {
    const classes = await getClassesById(Number(req.params.id));
    res.json(classes);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/type/:id', async (req, res) => {
  try {
    const classes = await getClassesByClassType(Number(req.params.id));
    res.json(classes);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
