import React from 'react';
import SidebarMenu from './components/SidebarMenu';
import "./App.css"
import { Box } from '@mui/material';
import Dashboard from './screens/Dashboard/Dashboard';

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box className="sidebar">
        <SidebarMenu />
      </Box>
      <Box className="main" >
        <Dashboard/>
      </Box>
    </Box>
  );
};

export default App;
