const router = require("express").Router();
const {User} = require('../../db/models')


router.post("/registration", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    console.log(req.body,87654567);
    console.log(user,765434567)
    if (user) {
      res.app.locals.user = user;
      res.redirect("/");
      return;
    }
    res.status(400).json({ error: "Заполните все поля" });
  } catch ({ message }) {
    res.status(500).json({ error: message, pffffff:'fsfsf' });
  }
});

module.exports = router;
