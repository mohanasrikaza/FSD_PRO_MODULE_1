import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ManageCourses = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'React Basics', instructor: 'John Doe', students: 45 },
    { id: 2, title: 'Advanced JavaScript', instructor: 'Jane Smith', students: 32 },
  ]);

  const handleDelete = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <div className="manage-courses">
      <div className="card">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>📚 Manage Courses</h2>
          <Link to="/admin/courses/create" className="btn-primary">
            ➕ Create New Course
          </Link>
        </div>

        {courses.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
            <p>No courses yet. Create your first course!</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Course Title</th>
                <th>Instructor</th>
                <th>Students</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.instructor}</td>
                  <td>{course.students}</td>
                  <td>
                    <button className="btn-primary" style={{ marginRight: '0.5rem' }}>✏️ Edit</button>
                    <button 
                      className="btn-danger"
                      onClick={() => handleDelete(course.id)}
                    >
                      🗑️ Delete
                    </button>
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

export default ManageCourses;
