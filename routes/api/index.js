const router = require("express").Router();
const jCraftRoutes = require("./jCraftDB");

// Book routes
router.use("/jcraft", jCraftRoutes);

module.exports = router;
