const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Refers to User model
    required: true
  },
  facility: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Facility", // Refers to Facility model
    required: true
  },
  date: {
    type: Date, // Ensures date is stored properly
    required: true
  },
  time: {
    type: String, // Keeps time as a separate string (e.g., "14:30")
    required: true
  },
  purpose: {
    type: String, // Purpose of reservation (why the room is booked)
    required: true
  },
  inChargeFaculty: {
    type: String, // Name of the faculty in charge of the booking
    required: true
  },
  name: {
    type: String, // Name of the person making the booking
    required: true
  },
  rollNo: {
    type: String, // Roll number of the student making the booking
    required: true
  },
  department: {
    type: String, // Department of the student
    required: true
  },
  status: {
    type: String,
    enum: ['Confirmed', 'Cancelled', 'Waiting'], // Status of the booking
    default: 'Waiting'
  }
}, { timestamps: true }); // Automatically adds `createdAt` and `updatedAt` timestamps

module.exports = mongoose.model("Reservation", reservationSchema);
