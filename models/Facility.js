const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    imageUrl: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model("Facility", facilitySchema);
