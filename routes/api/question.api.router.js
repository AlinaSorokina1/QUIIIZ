const router = require('express').Router();

const { Question } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const question = await Question.findAll();
    res.status(200).json(question);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;