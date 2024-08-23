import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Facilityreservation from './Pages/Facilityreservation';
import Classroom from './Pages/Classroom';
import Activeslots from './Pages/Activeslots';
import ClassroomDetail from './Pages/ClassroomDetail';
import PastReservations from './Pages/PastReservations';
import AdminDashboard from './Pages/AdminDashboard';
import AnalyticsDashboard from './Pages/AnalyticsDashboard'; // Ensure this is imported

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/dashboard" element={<Facilityreservation />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/active-slots" element={<Activeslots />} />
          <Route path="/classroom-detail" element={<ClassroomDetail />} />
          <Route path="/past-reservations" element={<PastReservations />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} /> {/* Ensure this route exists */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
