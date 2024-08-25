const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Signup
exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User created');
    } catch (error) {
        res.status(500).send('Error signing up');
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('User not found');
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');
        // Instead of generating a token, send a success message or user data
        res.status(200).send('Login successful');
    } catch (error) {
        res.status(500).send('Error logging in');
    }
};
