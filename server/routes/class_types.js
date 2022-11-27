const express = require('express');
const router = express.Router();
const { getClassTypes, getClassTypeById } = require('../db/queries/classTypeQueries');

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    const classTypes = await getClassTypes();
    res.json(classTypes);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const classType = await getClassTypeById(Number(req.params.id));
    res.json(classType);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;