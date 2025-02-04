import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Facilityreservation.css';
import ew101 from '../Components/Assets/classroom.jpeg';
import ew102 from '../Components/Assets/EW102.jpeg';
import ew103 from '../Components/Assets/EW 103.jpeg';
import ww203 from '../Components/Assets/WW 203.jpeg';
import ww204 from '../Components/Assets/classroom sidebar.jpeg';
import ww205 from '../Components/Assets/WW 205.jpeg';
import sidebarImage from '../Components/Assets/classroom sidebar.jpeg';

const Dashboard = ({ userName, userEmail }) => {
  const navigate = useNavigate();

  const venues = [
    { name: 'EW 101', image: ew101 },
    { name: 'EW 102', image: ew102 },
    { name: 'EW 103', image: ew103 },
    { name: 'WW 201', image: ww203 },
    { name: 'WW 202', image: ww204 },
    { name: 'WW 203', image: ww205 },
  ];

  const handleClassroomClick = (classroom) => {
    navigate('/classroom-detail', { state: { classroom } });
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-image">
          <img src={sidebarImage} alt="Classroom" />
        </div>
        <div className="sidebar-content">
          <button className="menu-item selected">CLASSROOMS</button>
        </div>
      </div>
      <div className="main-content-container">
        <div className="top-bar">
          <div className="welcome-section">
            <p>FACILITY RESERVATION <span className="welcome-name">{userName}</span></p>
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
                onClick={() => handleClassroomClick(venue)}
              >
                <img src={venue.image} alt={venue.name} />
                <p>{venue.name}</p>
              </div>
            ))}
          </div>
          <div className="venues-row">
            {venues.slice(3, 6).map((venue, index) => (
              <div
                key={index + 3}
                className="venue-box"
                onClick={() => handleClassroomClick(venue)}
              >
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
