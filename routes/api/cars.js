const router = require("express").Router();
const carsController = require("../../controllers/carsController");

// Matches with "/api/books"
router.route("/")
    .get(carsController.findAll)
    .post(carsController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(carsController.findById)
    .put(carsController.update)
    .delete(carsController.remove);

module.exports = router;
