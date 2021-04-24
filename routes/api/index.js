const router = require("express").Router();
const carRoutes = require("./cars");
const userRoutes = require("./user.routes");

router.use(carRoutes);
router.use(userRoutes);

module.exports = router;
