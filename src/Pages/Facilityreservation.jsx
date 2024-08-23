import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Facilityreservation.css';
import classroom from '../Components/Assets/classroom.jpeg';
import seminarhall from '../Components/Assets/seminar hall.jpeg';
import conferencehall from '../Components/Assets/conference hall.jpeg';
import lab from '../Components/Assets/lab.jpeg';
import auditorium from '../Components/Assets/auditorium.jpeg';
import discussionroom from '../Components/Assets/discussion room.jpeg';
import profile from '../Components/Assets/profile.jpeg';

const Dashboard = ({ userName, userEmail }) => {
  const navigate = useNavigate();

  const venues = [
    { name: 'CLASS ROOM', image: classroom, route: '/Classroom' },
    { name: 'SEMINAR HALL', image: seminarhall },
    { name: 'CONFERENCE HALL', image: conferencehall },
    { name: 'LAB', image: lab },
    { name: 'AUDITORIUM', image: auditorium },
    { name: 'DISCUSSION ROOM', image: discussionroom },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="sidebar-title">FACILITY RESERVATION</h2>
        <div className="profile-section">
          <img src={profile} alt="Profile" className="profile-image" />
          <p className="profile-name">{userName}</p>
          <p className="profile-email">{userEmail}</p>
        </div>
        <div className="menu-section">
          <button className="menu-item selected">FACILITY RESERVATION</button>
          <button 
            className="menu-item" 
            onClick={() => navigate('/active-slots')}
          >
            ACTIVE SLOTS
          </button>
          <button 
            className="menu-item" 
            onClick={() => navigate('/past-reservations')}
          >
            PAST RESERVATIONS
          </button>
        </div>
        <button className="logout-button" onClick={handleLogout}>LOG OUT</button>
      </div>
      <div className="main-content-container">
        <div className="top-bar">
          <div className="welcome-section">
            <p>Welcome, <span className="welcome-name">{userName}</span></p>
          </div>
          <div className="search-section">
            <input type="text" placeholder="Search..." className="search-bar" />
          </div>
        </div>
        <div className="main-content">
          <div className="venues-row">
            {venues.slice(0, 3).map((venue, index) => (
              <div
                key={index}
                className="venue-box"
                onClick={() => {
                  if (venue.route) {
                    navigate(venue.route);
                  }
                }}
              >
                <img src={venue.image} alt={venue.name} />
                <p>{venue.name}</p>
              </div>
            ))}
          </div>
          <div className="venues-row">
            {venues.slice(3, 6).map((venue, index) => (
              <div key={index + 3} className="venue-box">
                <img src={venue.image} alt={venue.name} />
                <p>{venue.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
