const htmlRoutes = require("./htmlRoutes");
const apiRoutes = require("./apiRoutes");
const router = require("express").Router();

router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;