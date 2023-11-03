const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controller/userController');

// User routes
router.route('/')
  .get(getUsers)       // GET /api/users
  .post(createUser);   // POST /api/users

router.route('/:userId')
  .get(getSingleUser)  // GET /api/users/:userId
  .put(updateUser)     // PUT /api/users/:userId
  .delete(deleteUser); // DELETE /api/users/:userId

// Friend routes
router.route('/:userId/friends/:friendId')
  .post(addFriend)     // POST /api/users/:userId/friends/:friendId
  .delete(deleteFriend); // DELETE /api/users/:userId/friends/:friendId

module.exports = router;