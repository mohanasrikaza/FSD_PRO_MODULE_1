import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="card">
        <div className="card-header">
          <h2>👨‍💼 Admin Dashboard</h2>
        </div>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Manage all courses, assignments, and student submissions from here.
        </p>
        <div className="dashboard-menu">
          <Link to="/admin/courses">📚 Manage Courses</Link>
          <Link to="/admin/assignments">📝 Manage Assignments</Link>
          <Link to="/admin/submissions">📤 View Submissions</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
