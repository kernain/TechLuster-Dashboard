import {useState} from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Slider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

const Container = styled(Box)`
  padding: 16px;
`;

const CardWrapper = styled(Card)`
  text-align: center;
  padding: 16px;
  margin: 8px;
`;

const IconWrapper = styled(Box)`
  font-size: 4rem;
`;

const SliderWrapper = styled(Slider)`
  width: 100%;
`;

const ProfileSection = styled(Box)`
  margin-top: 16px;
`;

const Header = styled(Box)`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

const TaskGrid = styled(Grid)`
  margin-top: 8px;
`;

const tasks = [
    { title: 'Aptitude (Developers)', icon: <CodeIcon /> },
    { title: 'React JS (Tier1)', icon: <DeveloperModeIcon /> },
    { title: 'Angular (Tier1)', icon: <CodeIcon /> },
    { title: 'React Native (Tier1)', icon: <PhoneIphoneIcon /> },
    { title: 'HTML (Tier3)', icon: <LanguageIcon /> },
    { title: 'Git ()', icon: <GitHubIcon /> },
  ];
const Dashboard = () => {

    const [yearsOfExperience, setYearsOfExperience] = useState(1);

    const handleSliderChange = (event, newValue) => {
        setYearsOfExperience(newValue);
    };
    return (
        <>
            <Box className="DashboardHeader" sx={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Box
                    className="page-title"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontFamily: 'Sofia Pro, Arial, sans-serif',
                    }}
                >
                    <HomeIcon sx={{ marginRight: '10px' }} />
                    <Typography variant="h5">Dashboard</Typography>
                </Box>
                <Box className="user-greet">
                    <Typography variant="h6">Hello, Syed Karnain Kamal</Typography>
                </Box>
            </Box>
            <Box sx={{ padding: '20px', width: '100%' }}>
                <Typography variant="h6">Your Tasks</Typography>
                <Typography variant="body1">
                    To proceed to the next stage you must pass the aptitude test and at least 4 skills from which at least one skill from tier 1. Add or remove skills <a href="#">here</a>.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', flexWrap: 'wrap' }}>
                    {/* Cards */}
                    {tasks.map((task, index) => (
                        <Box key={index} sx={{ width: '280px', padding: '3rem', border: '1px solid #ccc', borderRadius: '10px', textAlign: 'center', marginBottom: '20px', display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <Box sx={{ marginBottom: '20px' }}>
                                <Box sx={{ marginBottom: '20px', }}>
                                    {task.icon}
                                </Box>
                                <Typography variant="h6">{task.title}</Typography>
                            </Box>
                            <button style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px' }}>
                                Take Assessment
                            </button>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Profile Section */}
            <Box sx={{ marginTop: '40px', width: "500px" }}>
                <Typography variant="h6">Profile</Typography>
                <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                    It is important to complete your profile for your application to be successful.
                </Typography>
                <Card sx={{ padding: '20px', marginBottom: '20px' }}>
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
                        sx={{ marginBottom: '20px' }}
                    />
                    <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                        {yearsOfExperience} Year{yearsOfExperience !== 1 ? 's' : ''}
                    </Typography>
                    <Button variant="contained" sx={{background: "black"}}>
                        Update
                    </Button>
                </Card>
            </Box>
        </>
    );
}

export default Dashboard;
