const router = require('express').Router();
const { Category } = require('../../db/models');
const MainPage = require('../../components/MainPage');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    const document = res.renderComponent(MainPage, { categories });
    res.send(document);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
