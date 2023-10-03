const express = require('express');
const MessageController = require('../controllers/MessageController.js');

const router = express.Router();

const {
  addMessage,
  getMessages,
} = MessageController;

router.post('/', addMessage);

router.get('/:chatId', getMessages);

module.exports = router;
