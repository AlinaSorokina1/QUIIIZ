const router = require("express").Router();
const Registration = require("../../components/Registration");

router.get("/registration", async (req, res) => {
  res.send(res.renderComponent(Registration));
});

module.exports = router;
