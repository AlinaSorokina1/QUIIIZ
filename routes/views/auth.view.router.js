const router = require("express").Router();
const Registration = require("../../components/Registration");

router.get("/", async (req, res) => {
  res.send(res.renderComponent(Registration, {title: 'registration'}));
});

module.exports = router;
