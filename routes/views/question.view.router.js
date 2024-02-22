const router = require('express').Router();
const { Question } = require('../../db/models');
const QuestionPage = require('../../components/QuestionPage');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const questions = await Question.findOne({ where: { id } });
    const document = res.renderComponent(QuestionPage, { questions });
    res.send(document);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
