import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/LoginSignup.css'; 

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUserRoleChange = (e) => setUserRole(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log({ email, password, userRole });
    if (userRole === 'admin') {
      navigate('/admin-dashboard'); 
    } else {
      navigate('/dashboard'); 
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>FACILITY RESERVATION</h2>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <select value={userRole} onChange={handleUserRoleChange} required>
            <option value="" disabled hidden>User Role</option>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        <button type="submit" className="signin-button">Sign In</button>
      </form>
    </div>
  );
};

export default LoginSignup;
