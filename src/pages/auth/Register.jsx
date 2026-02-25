import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    // In a real app you would call the API here. for now we store users in localStorage
    setTimeout(() => {
      const userData = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        role: formData.role
      };
      // save credential for future logins
      try {
        const existing = JSON.parse(localStorage.getItem('users')) || [];
        existing.push({
          email: formData.email,
          password: formData.password,
          role: formData.role,
          name: formData.name,
          id: userData.id
        });
        localStorage.setItem('users', JSON.stringify(existing));
      } catch (e) {
        console.error('Could not save user credentials', e);
      }

      // immediately log the user in using auth context (which also persists)
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
        maxWidth: '450px',
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
          Create Account
        </h1>

        {error && (
          <div className="alert alert-error" style={{ marginBottom: '1rem' }}>
            {error}
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Register As</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" disabled={loading} style={{ width: '100%' }}>
          {loading ? 'Creating account...' : 'Register'}
        </button>

        <p style={{
          textAlign: 'center',
          marginTop: '1.5rem',
          color: '#6b7280'
        }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#667eea', fontWeight: '600' }}>
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
