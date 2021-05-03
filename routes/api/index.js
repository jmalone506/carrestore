const router = require("express").Router();

const carRoutes = require("./cars");
const userRoutes = require("./user.routes");
const noteRoutes = require("./notes");

router.use(carRoutes);
router.use(userRoutes);
router.use(noteRoutes);

module.exports = router;
