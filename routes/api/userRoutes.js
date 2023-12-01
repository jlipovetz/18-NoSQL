const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,

} = require('../../controllers/userController.js');

// /api/users
router
  .route('/')
  .get(getUsers)
  .post(createUser);

// /api/userses/:userseId
router
  .route('/:userId')
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser);

  router
  .route('/:userId/friends')
  .post(addFriend)

router
  .route('/:userId/friends/:_id')
  .delete(removeFriend)

module.exports = router;