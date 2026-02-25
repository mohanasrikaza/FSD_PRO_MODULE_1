import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();
  const { login } = useAuth();

  // Demo credentials for testing
  const validCredentials = {
    student: { email: 'student@example.com', password: 'student123' },
    admin: { email: 'admin@example.com', password: 'admin123' }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate credentials
    const validCreds = validCredentials[role];
    if (credentials.email !== validCreds.email) {
      setError('Invalid email address');
      return;
    }
    if (credentials.password !== validCreds.password) {
      setError('Invalid password');
      return;
    }

    setLoading(true);
    // Credentials are correct, proceed with login
    setTimeout(() => {
      const userData = {
        id: 1,
        name: role === 'admin' ? 'Admin User' : 'John Doe',
        email: credentials.email,
        role: role
      };
      login(userData);
      setLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem'
    }}>
      <form onSubmit={handleSubmit} style={{
        maxWidth: '400px',
        width: '100%',
        background: 'white',
        borderRadius: '12px',
        padding: '2.5rem',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontSize: '2rem',
          color: '#667eea'
        }}>
          Welcome Back
        </h1>

        {error && (
          <div className="alert alert-error" style={{ marginBottom: '1rem' }}>
            {error}
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Login As</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ padding: '0.75rem 1rem', border: '2px solid #e5e7eb', borderRadius: '8px' }}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading} style={{ width: '100%' }}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p style={{
          textAlign: 'center',
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#fef3c7',
          borderRadius: '8px',
          color: '#92400e',
          border: '1px solid #fde68a'
        }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#d97706', fontWeight: '600', textDecoration: 'underline' }}>
            Register here
          </Link>{' '}
          to get started!
        </p>
      </form>
    </div>
  );
};

export default Login;
