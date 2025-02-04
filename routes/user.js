const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Console log to confirm the file is loaded
console.log("User routes loaded");

// Registration route
router.post('/register', async (req, res) => {
    console.log("Register endpoint hit");  // Debugging log
    const { email, password, role } = req.body;

    try {
        // Check if request body contains necessary data
        if (!email || !password) {
            console.log("Email and password are required");
            return res.status(400).json({ message: 'Email and password are required' });
        }

        console.log("Request body:", req.body);  // Log request body

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("User already exists");
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Password hashed");

        // Create a new user
        const newUser = new User({
            email,
            password: hashedPassword,
            role: role || 'student' // Default to 'student' if role is not provided
        });

        // Save the user to the database
        await newUser.save();
        console.log("User registered successfully");
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Error during registration:", error);  // Detailed error log
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    console.log("Login endpoint hit");  // Debugging log
    const { email, password } = req.body;

    try {
        // Check if request body contains necessary data
        if (!email || !password) {
            console.log("Email and password are required");
            return res.status(400).json({ message: 'Email and password are required' });
        }

        console.log("Request body:", req.body);  // Log request body

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.log("User not found");
            return res.status(400).json({ message: 'User not found' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("Invalid credentials");
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token with user ID and role
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secretkey', {
            expiresIn: '1h',
        });

        console.log("Login successful");
        res.json({ token });
    } catch (error) {
        console.error("Error during login:", error);  // Detailed error log
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Fetch all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the database
        res.json(users); // Send the users as a response
    } catch (error) {
        console.error("Error fetching users:", error); // Detailed error log
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
});

module.exports = router;
