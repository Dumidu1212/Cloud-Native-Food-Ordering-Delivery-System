import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Use the API Gateway endpoint for user login
      const { data } = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/users/login`, { email, password });
      const { token, user } = data;
      // Store the token securely (localStorage for demonstration; consider secure cookies in production)
      localStorage.setItem('token', token);
      
      // Role-based redirection based on user role embedded in the token
      if (user.role === 'admin') {
        history.push('/admin/dashboard');
      } else if (user.role === 'restaurant') {
        history.push('/restaurant/dashboard');
      } else {
        setError('Unauthorized role');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Unified Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
