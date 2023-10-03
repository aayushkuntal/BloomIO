const MessageModel = require("../models/messageModel.js");
const asyncHandler = require("express-async-handler");

const addMessage = asyncHandler(async (req, res) => {
  const { chatId, senderId, text } = req.body;
  const message = new MessageModel({
    chatId,
    senderId,
    text,
  });
  const result = await message.save();
  res.status(200).json(result);
});

const getMessages = asyncHandler(async (req, res) => {
  const { chatId } = req.params;
  const result = await MessageModel.find({ chatId });
  res.status(200).json(result);
});

module.exports = { addMessage, getMessages };
