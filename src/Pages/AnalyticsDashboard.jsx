
import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import '../Components/AnalyticsDashboard.css';
import 'chart.js/auto'; 

const AnalyticsDashboard = () => {
  
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Number of Bookings',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Bookings Trend',
        data: [12, 15, 8, 10, 7, 5],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
      },
    ],
  };

  const pieData = {
    labels: ['Students', 'Faculty', 'Staff'],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="analytics-dashboard-container">
      <div className="top-bar">
        <div className="welcome-section">
          <p>Welcome, <span className="welcome-name">Admin</span></p>
        </div>
      </div>
      <div className="main-content">
        <div className="charts-container">
          <div className="chart-bar">
            <h3>Bar Chart</h3>
            <Bar data={barData} />
          </div>
          <div className="chart-line">
            <h3>Line Chart</h3>
            <Line data={lineData} />
          </div>
          <div className="chart-pie">
            <h3>Pie Chart</h3>
            <Pie data={pieData} />
          </div>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <p>Total No. of Venues: 100</p>
          <p>Total No. of Venues Booked: 70</p>
          <p>No. of Venues Booked by Students: 40</p>
          <p>No. of Venues Booked by Faculty: 30</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
