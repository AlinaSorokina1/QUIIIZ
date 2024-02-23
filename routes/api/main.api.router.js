const router = require('express').Router();

const { Category } = require('../../db/models');

const MainPage = require('../../components/MainPage');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
