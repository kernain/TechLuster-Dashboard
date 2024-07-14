import React, { useState, useContext } from 'react';
import { Box, Typography, Slider, Card, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeContext } from '../../theme/ThemeContext';

const tasks = [
  { title: 'Aptitude (Developers)', icon: <CodeIcon /> },
  { title: 'React JS (Tier1)', icon: <DeveloperModeIcon /> },
  { title: 'Angular (Tier1)', icon: <CodeIcon /> },
  { title: 'React Native (Tier1)', icon: <PhoneIphoneIcon /> },
  { title: 'HTML (Tier3)', icon: <LanguageIcon /> },
  { title: 'Git', icon: <GitHubIcon /> },
];

const Dashboard = () => {
  const { currentTheme } = useContext(ThemeContext);
  const [yearsOfExperience, setYearsOfExperience] = useState(1);

  const handleSliderChange = (event, newValue) => {
    setYearsOfExperience(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: currentTheme.palette.background.default,
        color: currentTheme.palette.text.primary,
        minHeight: '100vh',
        padding: '20px',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      <Box className="DashboardHeader" sx={{ marginBottom: '20px' }}>
        <Box
          className="page-title"
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'Sofia Pro, Arial, sans-serif',
          }}
        >
          <HomeIcon sx={{ marginRight: '10px' }} />
          <Typography variant="h6">Dashboard</Typography>
        </Box>
        <Box className="user-greet">
          <Typography variant="h6">Hello, Syed Karnain Kamal</Typography>
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h6">Your Tasks</Typography>
        <Typography variant="body1" sx={{ color: currentTheme.palette.text.secondary }}>
          To proceed to the next stage you must pass the aptitude test and at least 4 skills from which at least one skill from tier 1. Add or remove skills <a href="#" style={{ color: currentTheme.palette.primary.main }}>here</a>.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', flexWrap: 'wrap' }}>
          {tasks.map((task, index) => (
            <Box key={index} sx={{
              width: '280px',
              padding: '3rem',
              border: `1px solid ${currentTheme.palette.divider}`,
              borderRadius: '10px',
              textAlign: 'center',
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: currentTheme.palette.background.paper,
              color: currentTheme.palette.text.primary,
              transition: 'background-color 0.3s, color 0.3s',
            }}>
              <Box sx={{ marginBottom: '20px' }}>
                <Box sx={{ marginBottom: '20px' }}>
                  {task.icon}
                </Box>
                <Typography variant="h6">{task.title}</Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  padding: '10px 20px',
                  backgroundColor: currentTheme.palette.mode === 'dark' ? currentTheme.palette.background.default : currentTheme.palette.text.primary,
                  color: currentTheme.palette.mode === 'dark' ? currentTheme.palette.text.primary : currentTheme.palette.background.default,
                  border: 'none',
                  borderRadius: '5px',
                  '&:hover': {
                    backgroundColor: currentTheme.palette.mode === 'dark' ? currentTheme.palette.background.paper : currentTheme.palette.text.secondary,
                  },
                }}
              >
                Take Assessment
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ marginTop: '40px', width: '500px' }}>
        <Typography variant="h6">Profile</Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', color: currentTheme.palette.text.secondary }}>
          It is important to complete your profile for your application to be successful.
        </Typography>
        <Card sx={{
          padding: '20px',
          marginBottom: '20px',
          backgroundColor: currentTheme.palette.background.paper,
          color: currentTheme.palette.text.primary,
          transition: 'background-color 0.3s, color 0.3s',
        }}>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            How many years of experience you have in CSS?
          </Typography>
          <Slider
            value={yearsOfExperience}
            onChange={handleSliderChange}
            aria-labelledby="years-of-experience-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
            sx={{ marginBottom: '20px', color: currentTheme.palette.primary.main }}
          />
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            {yearsOfExperience} Year{yearsOfExperience !== 1 ? 's' : ''}
          </Typography>
          <Button variant="contained" sx={{
            backgroundColor: currentTheme.palette.mode === 'dark' ? currentTheme.palette.background.default : currentTheme.palette.text.primary,
            color: currentTheme.palette.mode === 'dark' ? currentTheme.palette.text.primary : currentTheme.palette.background.default,
            '&:hover': {
              backgroundColor: currentTheme.palette.mode === 'dark' ? currentTheme.palette.background.paper : currentTheme.palette.text.secondary,
            },
          }}>
            Update
          </Button>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
