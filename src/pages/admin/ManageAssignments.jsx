import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAssignments = () => {
  const [assignments] = useState([
    { id: 1, title: 'React Project', course: 'React Basics', dueDate: '2026-03-15', submissions: 12 },
    { id: 2, title: 'API Design Task', course: 'Node.js Backend', dueDate: '2026-03-20', submissions: 8 },
  ]);

  return (
    <div className="manage-assignments">
      <div className="card">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>📝 Manage Assignments</h2>
          <Link to="#" className="btn-primary">
            ➕ Create New Assignment
          </Link>
        </div>

        {assignments.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
            <p>No assignments yet. Create your first assignment!</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Assignment Title</th>
                <th>Course</th>
                <th>Due Date</th>
                <th>Submissions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td>{assignment.title}</td>
                  <td>{assignment.course}</td>
                  <td>{assignment.dueDate}</td>
                  <td><span className="course-badge">{assignment.submissions}</span></td>
                  <td>
                    <button className="btn-primary" style={{ marginRight: '0.5rem' }}>✏️ Edit</button>
                    <button className="btn-danger">🗑️ Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageAssignments;
