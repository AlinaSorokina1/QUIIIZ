const router = require('express').Router();

router.get('/:question_id', async (req, res) => {
  try {
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ error: message });
  }
});

module.exports = router;
