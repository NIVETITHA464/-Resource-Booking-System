const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const auth = require("./middleware/auth"); // Import your auth middleware
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// Import route files
const userRoutes = require("./routes/user");
const facilityRoutes = require("./routes/facility");
const reservationRoutes = require("./routes/reservation");

// Use routes
app.use("/api/users", userRoutes);
app.use("/facilities", facilityRoutes); // Protect facility routes if necessary
app.use("/reservations", auth(['student', 'faculty', 'staff']), reservationRoutes); // Protect reservation routes with auth

// Connect to MongoDB
mongoose.connect("mongodb+srv://nivetitha:nivi@cluster0.gqu23.mongodb.net/Resourceallocation", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("MongoDB connection error:", error));

// Test route
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
