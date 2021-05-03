const router = require("express").Router();
const notesController = require("../../controllers/notesController");

// Matches with "/api/notes"
router.route("/notes")
  .get(notesController.findAll)
  .post(notesController.create);

// Matches with "/api/notes/:id"
router
  .route("/notes/:id")
  .get(notesController.findById)
  .put(notesController.update)
  .delete(notesController.remove);

module.exports = router;
