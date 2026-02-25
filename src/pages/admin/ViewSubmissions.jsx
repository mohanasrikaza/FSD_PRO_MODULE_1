import React, { useState } from 'react';

const ViewSubmissions = () => {
  const [submissions] = useState([
    { id: 1, student: 'Alice Johnson', assignment: 'React Project', date: '2026-03-14', status: 'Submitted', grade: 'A' },
    { id: 2, student: 'Bob Smith', assignment: 'React Project', date: '2026-03-15', status: 'Submitted', grade: 'B+' },
    { id: 3, student: 'Charlie Brown', assignment: 'API Design Task', date: '2026-03-12', status: 'Graded', grade: 'A-' },
  ]);

  const getStatusBadgeColor = (status) => {
    return status === 'Submitted' ? '#fbbf24' : '#10b981';
  };

  return (
    <div className="view-submissions">
      <div className="card">
        <div className="card-header">
          <h2>📤 View Submissions</h2>
        </div>
        {submissions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
            <p>No submissions yet.</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Assignment</th>
                <th>Submission Date</th>
                <th>Status</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission.id}>
                  <td>{submission.student}</td>
                  <td>{submission.assignment}</td>
                  <td>{submission.date}</td>
                  <td>
                    <span 
                      className="course-badge" 
                      style={{ background: getStatusBadgeColor(submission.status) }}
                    >
                      {submission.status}
                    </span>
                  </td>
                  <td><strong>{submission.grade}</strong></td>
                  <td>
                    <button className="btn-primary">👁️ View</button>
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

export default ViewSubmissions;
