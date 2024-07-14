import AttachMoney from '@mui/icons-material/AttachMoney'
import React, { useState, useContext } from 'react';
import { Box, Typography, Slider, Card, Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { ThemeContext } from '../../theme/ThemeContext';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';

import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';


const MySkills = () => {

    const SkillsTasks = [
        { title: 'React JS (Tier1)', icon: <DeveloperModeIcon /> },
        { title: 'Angular (Tier1)', icon: <CodeIcon /> },
        { title: 'React Native (Tier1)', icon: <PhoneIphoneIcon /> },
        { title: 'HTML (Tier3)', icon: <LanguageIcon /> },
        { title: 'Git', icon: <GitHubIcon /> },
    ];

    const problemSolvingTask = [
        { title: 'Aptitude (Developers)', icon: <CodeIcon /> },

    ]

    const { currentTheme } = useContext(ThemeContext);

    return (
        <>
            <Box className="profileHeader" sx={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Box
                    className="page-title"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontFamily: 'Sofia Pro, Arial, sans-serif',
                    }}
                >
                    <EditIcon sx={{ marginRight: '10px' }} />
                    <Typography variant="h6">My Skills</Typography>
                </Box>
            </Box>
            <Box sx={{ width: '100%', padding: '20px' }}>
                <Typography variant="h6">Problem Solving Skills</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', flexWrap: 'wrap' }}>
                    {problemSolvingTask.map((task, index) => (
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
            <Box sx={{ width: '100%', padding: '20px' }}>
                <Typography variant="h6">Skills</Typography>
                <Typography variant="body1" sx={{ color: currentTheme.palette.text.secondary }}>
                    To proceed to next stage you must pass 4 skills from which at least one skill from tier 1.

                    <a href="#" style={{ color: currentTheme.palette.primary.main }}>here</a>.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', flexWrap: 'wrap' }}>
                    {SkillsTasks.map((task, index) => (
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
        </>
    )
}

export default MySkills;