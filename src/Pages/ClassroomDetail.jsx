import React, { useState } from 'react'; 
import { useLocation } from 'react-router-dom';
import '../Components/ClassroomDetail.css';
import classroomImages from '../Components/Assets/classroom.jpeg';

const ClassroomDetail = () => {
    const location = useLocation();
    const { classroom } = location.state || {}; // Get classroom details from location state
    const [showMessageBox, setShowMessageBox] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        rollNo: '',
        department: '',
        dateTime: '', // Combined date and time input
        purpose: '',
        facultyName: '',
    });

    if (!classroom) {
        return <div>No classroom selected</div>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const [date, time] = formData.dateTime.split(' '); // Split the dateTime into date and time

            const token = localStorage.getItem('token'); // Get token
            console.log('Token before booking:', token); // Check the token

            const response = await fetch('http://localhost:4000/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Ensure the token is correct
                },
                body: JSON.stringify({
                    facility: classroom._id,  // Send facility ID
                    date,                    // Send date
                    time,                    // Send time
                    purpose: formData.purpose,
                    inChargeFaculty: formData.facultyName,
                    name: formData.name,
                    rollNo: formData.rollNo,
                    department: formData.department,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Booking successful:', result);
                setShowMessageBox(true); // Show success message
                setFormData({
                    name: '',
                    rollNo: '',
                    department: '',
                    dateTime: '',
                    purpose: '',
                    facultyName: '',
                });
            } else {
                const errorText = await response.text();
                console.error('Response Error:', errorText);
                throw new Error('Failed to book the classroom: ' + errorText);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while booking: ' + error.message);
        }
    };

    const handleCloseMessageBox = () => {
        setShowMessageBox(false);
    };

    return (
        <div className="classroom-detail-container">
            <div className="sidebar">
                <div className="sidebar-image">
                    <img src={classroomImages} alt={classroom.name} />
                </div>
                <div className="sidebar-content">
                    <p className="classroom-name">{classroom.name}</p>
                </div>
            </div>
            <div className="main-content-container">
                <div className="top-bar">
                    <div className="welcome-section">
                        <p>Book {classroom.name}</p>
                    </div>
                </div>
                <div className="main-content">
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <label className="form-label">
                                Name
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                />
                            </label>
                            <label className="form-label">
                                Roll No
                                <input
                                    type="text"
                                    name="rollNo"
                                    value={formData.rollNo}
                                    onChange={handleChange}
                                    placeholder="Roll No"
                                    required
                                />
                            </label>
                        </div>
                        <div className="form-row">
                            <label className="form-label">
                                Department
                                <input
                                    type="text"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    placeholder="Department"
                                    required
                                />
                            </label>
                            <label className="form-label">
                                Date and Time
                                <input
                                    type="text"
                                    name="dateTime"
                                    value={formData.dateTime}
                                    onChange={handleChange}
                                    placeholder="YYYY-MM-DD HH:MM - HH:MM"
                                    required
                                />
                            </label>
                        </div>
                        <div className="form-row">
                            <label className="form-label">
                                Purpose
                                <input
                                    type="text"
                                    name="purpose"
                                    value={formData.purpose}
                                    onChange={handleChange}
                                    placeholder="Purpose"
                                    required
                                />
                            </label>
                            <label className="form-label">
                                In-Charge Faculty Name
                                <input
                                    type="text"
                                    name="facultyName"
                                    value={formData.facultyName}
                                    onChange={handleChange}
                                    placeholder="In-Charge Faculty Name"
                                    required
                                />
                            </label>
                        </div>
                        <div className="button-container">
                            <button type="submit">BOOK</button>
                        </div>
                    </form>
                </div>
            </div>

            {showMessageBox && (
                <div className="message-box-container">
                    <div className="message-box">
                        <h2>Success</h2>
                        <p>Booked successfully</p>
                        <button onClick={handleCloseMessageBox}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClassroomDetail;
