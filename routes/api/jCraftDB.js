const router = require("express").Router();
const jCraftController = require("../../controllers/jCraftController");


router.route("/")
  .post(jCraftController.create);

router.route("/admin/signup")
  .post(jCraftController.signUp);

router.route("/user/:loggedIn")
  .get(jCraftController.loggedIn);

router.route("/user/signout")
  .put(jCraftController.signOut);

router.route("/user/login")
  .put(jCraftController.logIn);

module.exports = router;