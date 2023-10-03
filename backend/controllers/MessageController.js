const MessageModel = require("../models/messageModel.js");
const asyncHandler = require("express-async-handler");

const addMessage = asyncHandler(async (req, res) => {
  try {
    const { chatId, senderId, text } = req.body;
    const message = new MessageModel({
      chatId,
      senderId,
      text,
    });
    const result = await message.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error adding message", error: error.message });
  }
});

const getMessages = asyncHandler(async (req, res) => {
  try {
    const { chatId } = req.params;
    const result = await MessageModel.find({ chatId });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error getting messages", error: error.message });
  }
});

module.exports = { addMessage, getMessages };
