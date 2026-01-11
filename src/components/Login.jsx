import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const { login } = useAppContext();
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple email validation (basic check)
    if (email.trim() && email.includes('@')) {
      login(email.trim());
      navigate('/products'); // Navigate to products page after login
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome to Mini E-Commerce</h1>
        <p className="login-subtitle">Enter your email to get started</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              autoFocus
            />
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        
        <p className="login-note">
          No password required - just enter your email to continue
        </p>
      </div>
    </div>
  );
};

export default Login;
