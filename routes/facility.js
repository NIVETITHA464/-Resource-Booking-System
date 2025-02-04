const express = require("express");
const router = express.Router();
const Facility = require("../models/Facility");
const auth = require("../middleware/auth");

// Add a new facility (only admins can add)
router.post("/", auth(['admin']), async (req, res) => {
    const { name, type, capacity, available, imageUrl } = req.body;
    try {
        const newFacility = new Facility({ name, type, capacity, available, imageUrl });
        await newFacility.save();
        res.status(201).json(newFacility);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all facilities (accessible to everyone)
router.get("/", async (req, res) => {
    try {
        const facilities = await Facility.find();
        res.json(facilities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// To ensure this router is loaded
console.log("Facility routes loaded");

module.exports = router;
