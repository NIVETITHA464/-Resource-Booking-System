import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Components/ClassroomDetail.css';
import classroomImages from '../Components/Assets/classroom.jpeg'; 

const ClassroomDetail = () => {
  const location = useLocation();
  const { classroom } = location.state || {}; 
  const [showMessageBox, setShowMessageBox] = useState(false);

  if (!classroom) {
    return <div>No classroom selected</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setShowMessageBox(true); 
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
                <input type="text" placeholder="Name" required />
              </label>
              <label className="form-label">
                Roll No
                <input type="text" placeholder="Roll No" required /> {/* Allows text and numbers */}
              </label>
            </div>
            <div className="form-row">
              <label className="form-label">
                Department
                <input type="text" placeholder="Department" required />
              </label>
              <label className="form-label">
                Date and Time
                <input type="text" placeholder="Date and Time" required /> {/* Allows text and numbers */}
              </label>
            </div>
            <div className="form-row">
              <label className="form-label">
                Purpose
                <input type="text" placeholder="Purpose" required />
              </label>
              <label className="form-label">
                In-Charge Faculty Name
                <input type="text" placeholder="In-Charge Faculty Name" required />
              </label>
            </div>
            <div className="button-container">
              <button type="submit">BOOK</button>
            </div>
          </form>
        </div>
      </div>

      {/* Message Box */}
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
