import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseForm from '../../components/forms/CourseForm';

const CreateCourse = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    console.log('Course data:', formData);
    // TODO: Submit course data to the backend
    alert('Course created successfully!');
    navigate('/admin/courses');
  };

  return (
    <div className="create-course">
      <div className="card">
        <div className="card-header">
          <h2>➕ Create New Course</h2>
        </div>
        <CourseForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CreateCourse;
