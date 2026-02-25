import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <div className="card">
        <div className="card-header">
          <h2>👨‍🎓 Student Dashboard</h2>
        </div>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Explore courses and manage your assignments here.
        </p>
        <div className="dashboard-menu">
          <Link to="/student/courses">📚 My Courses</Link>
          <Link to="/student/browse">🔍 Browse Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
