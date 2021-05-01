const router = require("express").Router();
const carRoutes = require("./cars");
const userRoutes = require("./user.routes");
const buyRoutes = require("./buy.routes")

router.use(carRoutes);
router.use(userRoutes);
router.use(buyRoutes);


module.exports = router;
