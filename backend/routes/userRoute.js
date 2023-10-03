const express = require('express');
const {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} = require('../controllers/UserController.js');
const authMiddleWare = require('../middleware/AuthMiddleware.js');

const router = express.Router();

router
  .route('/')
  .get(getAllUsers);

router
  .route('/:id')
  .get(getUser)
  .put(authMiddleWare, updateUser)
  .delete(authMiddleWare, deleteUser);

module.exports = router;
