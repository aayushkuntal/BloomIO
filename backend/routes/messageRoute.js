const express = require('express');
const MessageController = require('../controllers/MessageController.js');
const {addMessage,getMessages} = MessageController;

const router = express.Router();

router.post('/', addMessage);

router.get('/:chatId', getMessages);

module.exports = router;
