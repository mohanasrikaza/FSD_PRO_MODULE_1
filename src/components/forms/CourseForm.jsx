import React, { useState } from 'react';

const CourseForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="course-form">
      <input
        type="text"
        name="title"
        placeholder="Course Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Course Description"
        value={formData.description}
        onChange={handleChange}
        required
      ></textarea>
      <input
        type="text"
        name="instructor"
        placeholder="Instructor Name"
        value={formData.instructor}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Course</button>
    </form>
  );
};

export default CourseForm;
