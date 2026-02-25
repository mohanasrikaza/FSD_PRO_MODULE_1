import React, { useState, useEffect } from 'react';
import CourseCard from '../../components/common/CourseCard';

const BrowseCourses = () => {
  const [courses] = useState([
    { id: 1, title: 'React Basics', description: 'Learn React fundamentals and build interactive UIs', instructor: 'John Doe' },
    { id: 2, title: 'Advanced JavaScript', description: 'Master ES6+ and asynchronous programming', instructor: 'Jane Smith' },
    { id: 3, title: 'Web Design', description: 'Create beautiful and responsive web designs', instructor: 'Mike Johnson' },
    { id: 4, title: 'Node.js Backend', description: 'Build scalable backend applications with Node.js', instructor: 'Sarah Williams' },
  ]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Load enrolled courses from localStorage
    const stored = localStorage.getItem('enrolledCourses');
    if (stored) {
      setEnrolledCourses(JSON.parse(stored));
    }
  }, []);

  const handleEnroll = (course) => {
    const updatedEnrolled = [...enrolledCourses, course];
    setEnrolledCourses(updatedEnrolled);
    localStorage.setItem('enrolledCourses', JSON.stringify(updatedEnrolled));
  };

  const isEnrolled = (courseId) => {
    return enrolledCourses.some(course => course.id === courseId);
  };

  return (
    <div className="browse-courses">
      <div className="card">
        <div className="card-header">
          <h2>🔍 Browse Courses</h2>
        </div>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
          Explore and enroll in our available courses
        </p>
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onEnroll={handleEnroll}
              isEnrolled={isEnrolled(course.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseCourses;
