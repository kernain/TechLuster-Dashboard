import React, { useContext } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Typography, Button, Chip } from '@mui/material';
import JobCard from '../../components/JobCard/JobCard';
import { tabs, skills } from './data';
import { ThemeContext } from '../../theme/ThemeContext';

const Jobs = () => {
    const { currentTheme } = useContext(ThemeContext);

    const jobListings = [
        {
            title: 'Software Engineer',
            company: 'TechKluster',
            location: 'United States (Remote)',
            skills: ['Aptitude (Developers)', 'Python', 'JavaScript', '.Net', 'Java'],
            description: "At TechKluster, We're looking for passionate individuals to join our growing software engineering talent pool.",
        },
        {
            title: 'Senior Java Software Engineer',
            company: 'TechKluster',
            location: 'United States (Remote)',
            skills: ['Java', 'Spring Boot', 'Aptitude (Developers)', 'RESTful'],
            description: "Do you have a passion for crafting exceptional Java applications and a drive to innovate?",
        },
    ];

    return (
        <>
            <Box sx={{
                backgroundColor: currentTheme.palette.background.default,
                color: currentTheme.palette.text.primary,
                minHeight: '100vh',
                padding: '20px',
                transition: 'background-color 0.3s, color 0.3s',
            }}>
                <Box className="header" sx={{ padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Box
                        className="page-title"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            fontFamily: 'Sofia Pro, Arial, sans-serif',
                        }}
                    >
                        <WorkIcon sx={{ marginRight: '10px' }} />
                        <Typography variant="h6">Jobs</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '36px' }}>
                        {tabs.map((tab, index) => (
                            <Button
                                key={index}
                                variant="outlined"
                                sx={{
                                    borderRadius: '4px', // Square with slight border radius
                                    borderColor: 'black', // Change border color to black
                                    color: currentTheme.palette.text.primary, // Change text color to black
                                    padding: '8px 16px', // Add padding
                                    '&:hover': {
                                        borderColor: 'black', // Ensure border color stays black on hover
                                        color: 'black', // Ensure text color stays black on hover
                                    },
                                }}
                            >
                                {tab.label} ({tab.count})
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ marginTop: '36px' }}>
                        <Typography variant="h6" sx={{ marginBottom: '16px', fontFamily: 'Sofia Pro, Arial, sans-serif' }}>
                            Skills
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            {skills.map((skill, index) => (
                                <Chip
                                    key={index}
                                    icon={React.cloneElement(skill.icon, { fontSize: '1.5rem', sx: { color: 'black' } })} // Increase icon size and set color to black
                                    label={`${skill.label} (${skill.count})`}
                                    variant="outlined"
                                    sx={{
                                        fontSize: '0.875rem', // Reduce font size
                                        height: '48px', // Increase chip height
                                        borderRadius: '16px', // Optional: adjust border radius
                                        borderColor: currentTheme.palette.text.primary, // Adjust border color if needed
                                        color: currentTheme.palette.text.primary,
                                        padding: '0 12px', // Add left and right padding
                                        '& .MuiChip-icon': {
                                            fontSize: '1.5rem', // Increase icon size within the chip
                                            color: 'black', // Set icon color to black
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ padding: '20px' }}>
                    {jobListings.map((job, index) => (
                        <JobCard
                            key={index}
                            title={job.title}
                            company={job.company}
                            location={job.location}
                            skills={job.skills}
                            description={job.description}
                        />
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default Jobs;
