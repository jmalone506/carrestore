const router = require("express").Router();

const carRoutes = require("./cars");
const userRoutes = require("./user.routes");
const postRoutes = require("./post.routes")

router.use(carRoutes);
router.use(userRoutes);
router.use(postRoutes)


module.exports = router;
