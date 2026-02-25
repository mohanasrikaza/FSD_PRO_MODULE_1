import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        📚 CourseHub
      </Link>
      
      <div className="navbar-nav">
        {!user ? (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        ) : (
          <>
            <span className="nav-link">Welcome, {user.name || 'User'}</span>
            <Link 
              to={user.role === 'admin' ? '/admin' : '/student'} 
              className="nav-link"
            >
              Dashboard
            </Link>
            <button 
              className="nav-link" 
              onClick={handleLogout}
              style={{ backgroundColor: 'transparent', cursor: 'pointer' }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
