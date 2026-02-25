import React, { useState, useEffect } from 'react';
import CourseCard from '../../components/common/CourseCard';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Load enrolled courses from localStorage
    const stored = localStorage.getItem('enrolledCourses');
    if (stored) {
      setCourses(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="my-courses">
      <div className="card">
        <div className="card-header">
          <h2>📚 My Courses</h2>
        </div>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
          Your enrolled courses ({courses.length})
        </p>
        {courses.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>You haven't enrolled in any courses yet.</p>
            <p style={{ fontSize: '0.95rem' }}>Head over to <strong>Browse Courses</strong> to get started! 🚀</p>
          </div>
        ) : (
          <div className="courses-grid">
            {courses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course}
                isEnrolled={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
