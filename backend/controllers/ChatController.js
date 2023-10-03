const asyncHandler = require("express-async-handler");
const ChatModel = require("../models/chatModel");

const createChat = asyncHandler(async (req, res) => {
    const newChat = new ChatModel({
        members: [req.body.senderId, req.body.receiverId],
    });
    const result = await newChat.save();
    res.status(200).json(result);
});

const userChats = asyncHandler(async (req, res) => {
    const chat = await ChatModel.find({
        members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
});

const findChat = asyncHandler(async (req, res) => {
    const chat = await ChatModel.findOne({
        members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
});

module.exports = { createChat, userChats, findChat };
