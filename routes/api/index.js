const router = require("express").Router();
const bookRoutes = require("./cars");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
