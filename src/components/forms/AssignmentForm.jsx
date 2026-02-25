import React, { useState } from 'react';

const AssignmentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
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
    <form onSubmit={handleSubmit} className="assignment-form">
      <input
        type="text"
        name="title"
        placeholder="Assignment Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Assignment Description"
        value={formData.description}
        onChange={handleChange}
        required
      ></textarea>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Assignment</button>
    </form>
  );
};

export default AssignmentForm;
