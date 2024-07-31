import React, { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ThemeContext } from '../../theme/ThemeContext';


const JobCard = ({ title, company, location, skills, description }) => {
    const { currentTheme } = useContext(ThemeContext);

    return (
        <Box
            sx={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '16px',
                backgroundColor: '#fff',
                position: 'relative', // Added for absolute positioning of the button
            }}
        >
            <Typography variant="h6" sx={{ marginBottom: '8px' }}>{title}</Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: '8px' }}>{company}</Typography>
            <Typography variant="body2" sx={{ marginBottom: '16px' }}>
                In this role, you'll be: {location}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginBottom: '16px' }}>
                {skills.map((skill, index) => (
                    <Box
                        key={index}
                        sx={{
                            padding: '4px 8px',
                            borderRadius: '16px',
                            backgroundColor: '#f0f0f0',
                            marginRight: '8px',
                            marginBottom: '8px',
                        }}
                    >
                        {skill}
                    </Box>
                ))}
            </Box>
            <Typography variant="body2" sx={{ marginBottom: '16px' }}>{description}</Typography>
            <Box sx={{ position: 'absolute', bottom: '16px', right: '16px' }}>
                <Button
                    variant="outlined"
                    sx={{
                        border: 'none', // Remove border
                        padding: '8px 16px',
                        color: currentTheme.palette.text.primary,
                        textTransform: 'none', // Optional: prevent text from being uppercase
                        '&:hover': {
                            border: 'none', // Ensure border stays removed on hover
                        },
                    }}
                >
                    Read more →
                </Button>
            </Box>
        </Box>
    );
};

export default JobCard;
