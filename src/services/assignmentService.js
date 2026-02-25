import api from './api';

const assignmentService = {
  getAssignmentsByCourse: (courseId) => {
    return api.get(`/courses/${courseId}/assignments`);
  },

  getAssignmentById: (id) => {
    return api.get(`/assignments/${id}`);
  },

  createAssignment: (assignmentData) => {
    return api.post('/assignments', assignmentData);
  },

  updateAssignment: (id, assignmentData) => {
    return api.put(`/assignments/${id}`, assignmentData);
  },

  deleteAssignment: (id) => {
    return api.delete(`/assignments/${id}`);
  },

  submitAssignment: (assignmentId, submissionData) => {
    return api.post(`/assignments/${assignmentId}/submit`, submissionData);
  },

  getSubmissions: (assignmentId) => {
    return api.get(`/assignments/${assignmentId}/submissions`);
  },

  gradeSubmission: (submissionId, gradeData) => {
    return api.post(`/submissions/${submissionId}/grade`, gradeData);
  },
};

export default assignmentService;
