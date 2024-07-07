import React from 'react';
import ReactDOM from 'react-dom/client';
import { Box } from '@mui/material';
import SidebarMenu from './components/SidebarMenu';
import Dashboard from './screens/Dashboard/Dashboard';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Box sx={{ width: '100px' }}>
          <SidebarMenu />
        </Box>
        <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
          <Dashboard />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;