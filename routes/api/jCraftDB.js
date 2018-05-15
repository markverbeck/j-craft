const router = require("express").Router();
const jCraftController = require("../../controllers/jCraftController");


router.route("/")
  .post(jCraftController.create);

module.exports = router;