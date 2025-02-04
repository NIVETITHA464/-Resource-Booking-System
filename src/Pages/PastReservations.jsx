import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/PastReservations.css';
import profile from '../Components/Assets/profile.jpeg'; 

const PastReservations = ({ userName, userEmail }) => {
  const navigate = useNavigate();

  const pastReservations = [
    { id: 1, rollNo: '7376222CT138', name: 'Nivetitha', facility: 'EW 101', purpose: 'Study Group', dateTime: '2024-08-01 10:00 AM', status: 'Completed' },
    { id: 2, rollNo: '7376222CT128', name: 'Linisha', facility: 'WW 203', purpose: 'Meeting', dateTime: '2024-08-02 02:00 PM', status: 'Cancelled' }
  ];

  return (
    <div className="reservations-container">
      <div className="sidebar">
        <div className="profile-section">
          <img src={profile} alt="Profile" className="profile-image" />
          <p className="profile-name">{userName}</p>
          <p className="profile-email">{userEmail}</p>
        </div>
        <div className="sidebar-content">
          <button className="menu-item" onClick={() => navigate('/dashboard')}>FACILITY RESERVATION</button>
          <button className="menu-item" onClick={() => navigate('/active-slots')}>ACTIVE SLOTS</button>
          <button className="menu-item selected">PAST RESERVATIONS</button>
        </div>
        <button className="logout-button" onClick={() => navigate('/login')}>LOG OUT</button>
      </div>
      <div className="main-content-container">
        <div className="top-bar">
          <div className="welcome-section">
            <p>Past Reservations</p>
          </div>
        </div>
        <div className="main-content">
          <table className="reservations-table">
            <thead>
              <tr>
                <th>S no</th>
                <th>Roll no</th>
                <th>Name</th>
                <th>Facility</th>
                <th>Purpose</th>
                <th>Date and time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {pastReservations.map((reservation, index) => (
                <tr key={reservation.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{index + 1}</td>
                  <td>{reservation.rollNo}</td>
                  <td>{reservation.name}</td>
                  <td>{reservation.facility}</td>
                  <td>{reservation.purpose}</td>
                  <td>{reservation.dateTime}</td>
                  <td>{reservation.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PastReservations;
