const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const auth = require('../middleware/auth'); // Ensure you have the auth middleware

// Create a new reservation (students and faculty can create)
router.post("/", auth(['student', 'faculty']), async (req, res) => {
    const { facility, date, time, purpose, inChargeFaculty, name, rollNo, department } = req.body;

    // Log the request body to check the incoming data
    console.log('Received reservation request:', req.body);

    // Validate that all required fields are present
    if (!facility || !date || !time || !purpose || !inChargeFaculty || !name || !rollNo || !department) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Create a new reservation with the provided data
        const newReservation = new Reservation({
            user: req.user.id,  // Ensure this is req.user.id
            facility,
            date: new Date(`${date}T${time}:00Z`),  // Properly format date and time
            time,
            purpose,
            inChargeFaculty,
            name,
            rollNo,
            department,
            status: 'Waiting'  // Default status
        });

        // Save the new reservation in the database
        const savedReservation = await newReservation.save();
        console.log('Reservation saved:', savedReservation);

        // Send the newly created reservation as a response
        res.status(201).json(savedReservation);
    } catch (error) {
        console.error('Error in reservation route:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
