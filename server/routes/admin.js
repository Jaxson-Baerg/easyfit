const express = require('express');
const router = express.Router();

require('dotenv').config();

// Get all class types
router.get('/', async (req, res) => {
  res.json(process.env.ADMIN_PASS);
});

module.exports = router;
