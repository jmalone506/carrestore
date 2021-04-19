const router = require("express").Router();
const carRoutes = require("./cars");

// Book routes
router.use("/car", carRoutes);

module.exports = router;
