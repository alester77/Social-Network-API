const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controller/thoughtController');

// Thoughts routes
router.route('/')
  .get(getThoughts)       // GET /api/thoughts
  .post(createThought);   // POST /api/thoughts

router.route('/:thoughtId')
  .get(getSingleThought)  // GET /api/thoughts/:thoughtId
  .put(updateThought)     // PUT /api/thoughts/:thoughtId
  .delete(deleteThought); // DELETE /api/thoughts/:thoughtId

// Reactions routes
router.route('/:thoughtId/reactions')
  .post(addReaction);     // POST /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction); // DELETE /api/thoughts/:thoughtId/reactions/:reactionId

module.exports = router;