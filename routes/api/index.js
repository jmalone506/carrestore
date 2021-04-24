const router = require("express").Router();
const carRoutes = require("./cars");
const userRoutes = require("./user.routes");

router.use("/car", carRoutes);
router.use("/users", userRoutes);

module.exports = router;
