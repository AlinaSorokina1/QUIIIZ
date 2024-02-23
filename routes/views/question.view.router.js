const router = require('express').Router();
const { Question, Category } = require('../../db/models');
const QuestionPage = require('../../components/QuestionPage');

router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll();
    const document = res.renderComponent(QuestionPage, {
      questions,
      title: 'просто',
    });
    res.send(document);
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ error: message });
  }
});

// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const question = await Question.findOne({ where: { id } });
//     const document = res.renderComponent(QuestionPage, { question });
//     res.send(document);
//   } catch ({ message }) {
//     console.log(message);
//     res.status(500).json({ error: message });
//   }
// });

module.exports = router;
