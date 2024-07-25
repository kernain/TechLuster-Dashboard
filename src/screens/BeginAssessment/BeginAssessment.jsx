// src/screens/BeginAssessment/BeginAssessment.jsx
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import JavascriptIcon from '@mui/icons-material/Javascript';
import logo from '../../assets/logo-2.jpg'; // Placeholder logo image path

const BeginAssessment = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: 'white',
                    padding: '20px 20px',
                    marginBottom: '20px',
                }}
            >
                <img src={logo} alt="TechKluster" style={{ height: '50px' }} />
            </Box>

            <Box sx={{ width: '100%', textAlign: 'center', padding: '20px' }}>
                <Typography variant="h5" gutterBottom>
                    Skill Assessment for JavaScript
                </Typography>

                <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Box display="flex" alignItems="center">
                            <Typography variant="body1">
                                <strong>Skill:</strong>
                            </Typography>
                            <JavascriptIcon sx={{ marginLeft: '5px' }} />
                            <Typography variant="body1" sx={{ marginLeft: '5px' }}>JavaScript</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">
                            <strong>Duration:</strong> 15 Minutes
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">
                            <strong>Questions:</strong> 25 (MCQs)
                        </Typography>
                    </Grid>
                </Grid>

                <Box display="flex" alignItems="center" justifyContent="center" sx={{ margin: '20px 0' }}>
                    <WarningIcon color="warning" sx={{ marginRight: '8px' }} />
                    <Typography variant="h6" color="warning.main">
                        Important
                    </Typography>
                </Box>

                <Box sx={{ textAlign: 'left', marginBottom: '20px' }}>
                    <Typography variant="body1" paragraph>
                        Once you begin the assessment, it is crucial to understand that you will not be able to pause, restart, or reset the assessment for any reason. Therefore, we kindly request that you take the following precautions before starting the assessment:
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <strong>Allocate Sufficient Time:</strong> Ensure that you have a suitable amount of uninterrupted time available to complete in one sitting.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <strong>Stable Internet Connection:</strong> Make sure you have a stable and reliable internet connection before beginning the assessment.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <strong>Eliminate Distractions:</strong> Choose a quiet and comfortable environment with minimal distractions to focus entirely on the assessment.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <strong>Technical Support:</strong> In case of any technical issues, please promptly reach out to our support team via Support ticket.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Remember, your assessment progress cannot be reset or paused once initiated, so it’s essential to be fully prepared before starting. Please do not share any assessment-related information or content with others, as it may compromise the integrity of the evaluation process.
                    </Typography>
                </Box>

                <Typography variant="h6" align="center" gutterBottom>
                    Are you ready?
                </Typography>

                <Box display="flex" justifyContent="center">
                    <Button
                        variant="contained"
                        sx={{ marginRight: '10px', backgroundColor: 'black', '&:hover': { backgroundColor: 'black' } }}
                    >
                        No, take me back
                    </Button>
                    <Button variant="contained" color="warning">
                        Yes, let's begin
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default BeginAssessment;
