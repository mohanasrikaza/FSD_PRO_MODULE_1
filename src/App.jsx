import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageCourses from './pages/admin/ManageCourses';
import CreateCourse from './pages/admin/CreateCourse';
import ManageAssignments from './pages/admin/ManageAssignments';
import ViewSubmissions from './pages/admin/ViewSubmissions';

// Student Pages
import StudentDashboard from './pages/student/StudentDashboard';
import BrowseCourses from './pages/student/BrowseCourses';
import MyCourses from './pages/student/MyCourses';
import SubmitAssignment from './pages/student/SubmitAssignment';

// Common Pages
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <Layout>
                  <AdminDashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/courses"
            element={
              <ProtectedRoute requiredRole="admin">
                <Layout>
                  <ManageCourses />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/courses/create"
            element={
              <ProtectedRoute requiredRole="admin">
                <Layout>
                  <CreateCourse />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/assignments"
            element={
              <ProtectedRoute requiredRole="admin">
                <Layout>
                  <ManageAssignments />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/submissions"
            element={
              <ProtectedRoute requiredRole="admin">
                <Layout>
                  <ViewSubmissions />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Student Routes */}
          <Route
            path="/student"
            element={
              <ProtectedRoute requiredRole="student">
                <Layout>
                  <StudentDashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/courses"
            element={
              <ProtectedRoute requiredRole="student">
                <Layout>
                  <MyCourses />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/browse"
            element={
              <ProtectedRoute requiredRole="student">
                <Layout>
                  <BrowseCourses />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/submit"
            element={
              <ProtectedRoute requiredRole="student">
                <Layout>
                  <SubmitAssignment />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
