import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/LoginSignup.css'; 

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('student'); // Default to student
  const [isSignUp, setIsSignUp] = useState(true); 
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUserRoleChange = (e) => setUserRole(e.target.value);

  const handleToggle = () => setIsSignUp(!isSignUp);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log({ email, password, userRole });

    try {
      const endpoint = isSignUp 
        ? 'http://localhost:4000/api/users/register'  // Updated to include /api
        : 'http://localhost:4000/api/users/login';    // Updated to include /api

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role: userRole }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message); // Success message
        if (userRole === 'admin') {
          navigate('/admin-dashboard'); 
        } else {
          navigate('/dashboard'); 
        }
      } else {
        console.error(data.message); // Error message
        alert(data.message || 'An error occurred. Please try again.'); // Show alert for the error
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.'); 
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
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
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
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
        <button type="submit" className="signin-button">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        <p>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button type="button" onClick={handleToggle}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginSignup;
