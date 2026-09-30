import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import FloatingFeedback from './components/FloatingFeedback';

// Public Pages
import LandingPage from './pages/Landing';
import LandingAI from './pages/LandingAI';
import StudentBenefits from './pages/StudentBenefits';
import Apply from './pages/Apply';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Bootcamps from './pages/Bootcamps';
import FullStack from './pages/Bootcamps/FullStack';
import DataEngineering from './pages/Bootcamps/DataEngineering';
import SolutionsArchitecture from './pages/Bootcamps/SolutionsArchitecture';

// Student Pages
import Dashboard from './pages/Student/Dashboard';
import Curriculum from './pages/Student/Curriculum';
import Resources from './pages/Student/Resources';
import Assignments from './pages/Student/Assignments';
import CourseOverview from './pages/Student/CourseOverview';
import CourseViewer from './pages/Student/CourseViewer';
import QuizRoom from './pages/Student/QuizRoom';
import Scorecard from './pages/Student/Scorecard';
import StudentLayout from './components/StudentLayout';
import InterviewDashboard from './pages/Student/Interview/InterviewDashboard';
import InterviewRoom from './pages/Student/Interview/InterviewRoom';
import StructuredInterviewRoom from './pages/Student/Interview/StructuredInterviewRoom';
import Feedback from './pages/Student/Interview/Feedback';
import Profile from './pages/Student/Profile';
import Settings from './pages/Student/Settings';
import BootcampApply from './pages/Student/BootcampApply';
// College Pages
import CollegeLayout from './components/CollegeLayout';
import CollegeDashboard from './pages/College/Dashboard';
import CollegeStudents from './pages/College/Students';
import CollegeSettings from './pages/College/Settings';

import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminStudents from './pages/Admin/Students';
import AdminColleges from './pages/Admin/Colleges';
import AdminApplied from './pages/Admin/AdminApplied';
import AdminTestReview from './pages/Admin/AdminTestReview';
import AdminAccepted from './pages/Admin/AdminAccepted';
import AdminLeads from './pages/Admin/AdminLeads';
import AdminLogin from './pages/Admin/Login';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <FloatingFeedback />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/ai-interview" element={<LandingAI />} />
          <Route path="/student-benefits" element={<StudentBenefits />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/bootcamps" element={<Bootcamps />} />
          <Route path="/bootcamps/full-stack" element={<FullStack />} />
          <Route path="/bootcamps/data-engineering" element={<DataEngineering />} />
          <Route path="/bootcamps/solutions-architecture" element={<SolutionsArchitecture />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Student Protected Routes */}
          <Route path="/student" element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="resources" element={<Resources />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="interview" element={<InterviewDashboard />} />
            <Route path="interview/room/:id" element={<InterviewRoom />} />
            <Route path="interview/practice/:id" element={<StructuredInterviewRoom />} />
            <Route path="interview/:id/feedback" element={<Feedback />} />
          </Route>

          {/* Full Screen Student Routes (No Sidebar) */}
          <Route path="/student/bootcamp/apply" element={
            <ProtectedRoute allowedRoles={['student']}>
              <BootcampApply />
            </ProtectedRoute>
          } />
          <Route path="/student/course/:courseId" element={
            <ProtectedRoute allowedRoles={['student']}>
              <CourseOverview />
            </ProtectedRoute>
          } />
          <Route path="/student/course/:courseId/module/:moduleId" element={
            <ProtectedRoute allowedRoles={['student']}>
              <CourseViewer />
            </ProtectedRoute>
          } />
          <Route path="/quiz/:assignmentId" element={
            <ProtectedRoute allowedRoles={['student']}>
              <QuizRoom />
            </ProtectedRoute>
          } />
          <Route path="/scorecard/:scorecardId" element={
            <ProtectedRoute allowedRoles={['student']}>
              <Scorecard />
            </ProtectedRoute>
          } />

          {/* College Protected Routes */}
          <Route path="/college" element={
            <ProtectedRoute allowedRoles={['college']}>
              <CollegeLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<CollegeDashboard />} />
            <Route path="students" element={<CollegeStudents />} />
            <Route path="settings" element={<CollegeSettings />} />
          </Route>

          {/* Admin Protected Routes */}
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="colleges" element={<AdminColleges />} />
            <Route path="applicants/new" element={<AdminApplied />} />
            <Route path="applicants/review" element={<AdminTestReview />} />
            <Route path="applicants/accepted" element={<AdminAccepted />} />
            <Route path="leads" element={<AdminLeads />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
