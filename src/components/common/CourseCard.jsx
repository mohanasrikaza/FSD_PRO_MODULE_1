import React, { useState, useEffect } from 'react';

const CourseCard = ({ course, onEnroll, isEnrolled = false }) => {
  const [enrolled, setEnrolled] = useState(isEnrolled);

  useEffect(() => {
    setEnrolled(isEnrolled);
  }, [isEnrolled]);

  const handleEnroll = () => {
    if (!enrolled) {
      setEnrolled(true);
      if (onEnroll) {
        onEnroll(course);
      }
    }
  };

  return (
    <div className="course-card">
      <div style={{ marginBottom: '1rem' }}>
        <span className="course-badge">📚 Course</span>
      </div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
        <span className="course-instructor">
          👨‍🏫 {course.instructor}
        </span>
        <button 
          className="btn-primary" 
          style={{ margin: 0, padding: '0.5rem 1rem', fontSize: '0.9rem' }}
          onClick={handleEnroll}
          disabled={enrolled}
        >
          {enrolled ? '✓ Enrolled' : 'Enroll'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
