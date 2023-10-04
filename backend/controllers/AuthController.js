const UserModel = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const bycrypt = require('bcryptjs');

const registerUser = asyncHandler(async (req, res) => {

    const { username, password, firstname, lastname } = req.body;
    const hashedPassword = await bycrypt.hash(password, 10);

    try {
        //Check if user already exists
        const userExists = await UserModel.findOne({ username });
        
        if (userExists) {
            res.status(400).json({ message: 'User already exists' });
        }

        const user = await UserModel.create({
            username,
            password: hashedPassword,
            firstname,
            lastname,
        });
        res.status(201).json({
            _id: user._id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            token: generateToken(user._id),
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
);

const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await UserModel.findOne({ username });
        const { _id, firstname, lastname } = user;
        console.log({ _id, firstname, lastname });
        if (user) {
            const isValid = await bycrypt.compare(password, user.password);
            isValid ? res.status(200).json({
                _id: user._id,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                token: generateToken(user._id),
            }) : res.status(401).json({ message: 'Invalid password' });
        } else {
            res.status(401).json({ message: 'User dosen\'t exist' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
module.exports = { registerUser,loginUser };