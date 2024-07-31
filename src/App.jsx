// src/App.jsx
import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeContextProvider, ThemeContext } from './theme/ThemeContext';
import Dashboard from './screens/Dashboard/Dashboard';
import Profile from './screens/Profile/Profile';
import Billing from './screens/Billing/Billing';
import Contact from './screens/Contact/Contact';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import './App.css';
import MyJobs from './screens/MyJobs/MyJobs';
import MySkills from './screens/MySkills/MySkills';
import AssessmentQuestion from './screens/AssessmentQuestion/AssessmentQuestion';
import BeginAssessment from './screens/BeginAssessment/BeginAssessment';
import Jobs from './screens/Jobs/Jobs';
import Login from './screens/Login/Login';
import JoinUs from './screens/JoinUs/JoinUs';
import Signup from './screens/Signup/Signup';


const AppContent = () => {
  const { currentTheme } = useContext(ThemeContext);
  const location = useLocation();

  // Define routes where the sidebar should not be displayed
  const noSidebarRoutes = ['/begin-assessment', "/login", "/join-us", "/signup"];

  // Check if the current route is in the noSidebarRoutes array
  const showSidebar = !noSidebarRoutes.includes(location.pathname);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {showSidebar && (
        <Box sx={{ width: '71px' }}>
          <SidebarMenu />
        </Box>
      )}
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          backgroundColor: currentTheme.palette.background.default,
          color: currentTheme.palette.text.primary,
          transition: 'background-color 0.3s, color 0.3s',
          ...(showSidebar ), // Adjust content margin when sidebar is present
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/my-skills" element={<MySkills />} />
          <Route path="/all-jobs" element={<Jobs />} />
          <Route path="/my-jobs" element={<MyJobs />} />
          <Route path="/my-interviews" element={<div>My Interviews</div>} />
          <Route path="/my-offers" element={<div>My Offers</div>} />
          <Route path="/my-invites" element={<div>My Invites</div>} />
          <Route path="/my-account" element={<Profile />} />
          <Route path="/candidate-billing" element={<Billing />} />
          <Route path="/customer-support" element={<Contact />} />
          <Route path="/begin-assessment" element={<BeginAssessment/>} />
          <Route path="/assessment-question" element={<AssessmentQuestion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeContextProvider>
  );
};

export default App;
