const router = require('express').Router();
const { Question } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { answer, id } = req.body;
    const rightAnswer = await Question.findOne({ where: { id } });
    if (rightAnswer.answer === answer) {
      res.json({ message: 'OK' });
    } else {
      res.json({ message: 'ОШИБКА', rightAnswer });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ error: message });
  }
});

module.exports = router;
