import api from './api';

const courseService = {
  getAllCourses: () => {
    return api.get('/courses');
  },

  getCourseById: (id) => {
    return api.get(`/courses/${id}`);
  },

  createCourse: (courseData) => {
    return api.post('/courses', courseData);
  },

  updateCourse: (id, courseData) => {
    return api.put(`/courses/${id}`, courseData);
  },

  deleteCourse: (id) => {
    return api.delete(`/courses/${id}`);
  },

  enrollCourse: (courseId) => {
    return api.post(`/courses/${courseId}/enroll`);
  },

  getStudentCourses: () => {
    return api.get('/courses/student/enrolled');
  },
};

export default courseService;
