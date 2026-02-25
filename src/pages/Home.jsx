import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
  const { user } = useAuth();
  const [visitStatus, setVisitStatus] = useState(null);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = new Date().getTime();
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;

    if (!lastVisit) {
      // First time visitor
      setVisitStatus('firstTime');
    } else {
      const timeSinceLastVisit = currentTime - parseInt(lastVisit);
      if (timeSinceLastVisit > sevenDaysInMs) {
        // Returning after long time
        setVisitStatus('returning');
      }
    }

    // Update last visit time
    localStorage.setItem('lastVisit', currentTime.toString());
  }, []);

  const welcomeQuotes = [
    "✨ Welcome to your learning journey! Every expert was once a beginner.",
    "🎓 Great to see you here! Knowledge is the most valuable asset.",
    "🚀 Welcome aboard! Let's make learning an amazing experience.",
    "💡 Welcome! Remember, the beautiful thing about learning is that no one can take it away from you.",
    "🌟 Welcome! You're about to unlock your potential. Let's get started!"
  ];

  const randomQuote = welcomeQuotes[Math.floor(Math.random() * welcomeQuotes.length)];

  return (
    <div className="home-page">
      <div className="hero-section">
        {visitStatus === 'firstTime' && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', margin: 0 }}>
              {randomQuote}
            </p>
          </div>
        )}

        {visitStatus === 'returning' && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>
              👋 Welcome back! We've missed you! It's been a while since your last visit.
            </p>
          </div>
        )}

        <h1>Welcome to Course Management System</h1>
        <p>Learn and manage courses efficiently</p>
        
        {user ? (
          <div className="user-links">
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Welcome, {user.name || 'User'}! 👋</p>
            {user.role === 'admin' ? (
              <>
                <Link to="/admin" className="btn-primary">📊 Go to Admin Dashboard</Link>
                <Link to="/admin/courses" className="btn-secondary" style={{ marginLeft: '1rem' }}>📚 Manage Courses</Link>
              </>
            ) : (
              <>
                <Link to="/student" className="btn-primary">🎓 Go to Student Dashboard</Link>
                <Link to="/student/browse" className="btn-secondary" style={{ marginLeft: '1rem' }}>🔍 Browse Courses</Link>
              </>
            )}
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login" className="btn-primary">🔐 Login</Link>
            <Link to="/register" className="btn-secondary">✍️ Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
