import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Activeslots.css';
import profile from '../Components/Assets/profile.jpeg';

const ActiveSlots = () => {
  const navigate = useNavigate();

  const activeSlots = [
    { id: 1, rollNo: '7376222CT138', name: 'Nivetitha', facility: 'EW 101', purpose: 'Study Group', dateTime: '2024-08-01 10:00 AM', status: 'Confirmed' },
    { id: 2, rollNo: '7376222CT128', name: 'Linisha', facility: 'WW 203', purpose: 'Meeting', dateTime: '2024-08-02 02:00 PM', status: 'Cancelled' },
    { id: 3, rollNo: '7376222MC115', name: 'Jana Sruti', facility: 'WW 212', purpose: 'Project Work', dateTime: '2024-08-03 03:00 PM', status: 'Waiting List' }
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="reservations-container">
      <div className="sidebar">
        <div className="profile-section">
          <img src={profile} alt="Profile" className="profile-image" />
          <p className="profile-name">User Name</p>
          <p className="profile-email">User Email</p>
        </div>
        <div className="sidebar-content">
          <button className="menu-item" onClick={() => navigate('/dashboard')}>FACILITY RESERVATION</button>
          <button className="menu-item selected">ACTIVE SLOTS</button>
          <button className="menu-item" onClick={() => navigate('/past-reservations')}>PAST RESERVATIONS</button>
        </div>
        <button className="logout-button" onClick={handleLogout}>LOG OUT</button>
      </div>
      <div className="main-content-container">
        <div className="top-bar">
          <div className="welcome-section">
            <p>Active Slots</p>
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
              {activeSlots.map((slot, index) => (
                <tr key={slot.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{index + 1}</td>
                  <td>{slot.rollNo}</td>
                  <td>{slot.name}</td>
                  <td>{slot.facility}</td>
                  <td>{slot.purpose}</td>
                  <td>{slot.dateTime}</td>
                  <td>{slot.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActiveSlots;
