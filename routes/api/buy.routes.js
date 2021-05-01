const router = require("express").Router();
const buyController = require("../../controllers/buy.controller");


// Matches with "/api/books/:id"
router
    .route("/buy/:id")
    .get(buyController.findById)
    .put(buyController.update)
    .delete(buyController.remove);

module.exports = router;
