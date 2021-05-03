const router = require("express").Router();

const carRoutes = require("./cars");
const userRoutes = require("./user.routes");
const postRoutes = require("./posts.routes")

router.use(carRoutes);
router.use(userRoutes);
router.use(postRoutes)


module.exports = router;
