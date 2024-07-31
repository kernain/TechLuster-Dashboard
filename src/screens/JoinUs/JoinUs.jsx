import React, { useContext } from 'react';
import { Box, Button, Typography, Link, Grid } from '@mui/material';
import { ThemeContext } from '../../theme/ThemeContext';
import Logo from "../../assets/login-logo.jpg";
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';


const JoinUs = () => {
    const { currentTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleSignUp = () =>{
        navigate('/signup')
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: currentTheme.palette.background.default,
        }}>
           <Header/>

            <Box sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                px: 4,
                backgroundColor: '#f9f9f9',
            }}>
                <Typography variant="h5" sx={{ mb: 4, alignSelf: 'flex-start', fontSize: '1.75rem' }}>
                    Tell us who you are
                </Typography>

                <Grid container spacing={4} sx={{}}>
                    <Grid item xs={6}>
                        <Box sx={{
                            p: 3,
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                        }}>
                            <Typography variant="h6" sx={{ mb: 2, fontSize: '2rem' }}>Client</Typography>
                            <Typography variant="body1" sx={{ my: 5, fontSize: '1.3rem', textAlign: "left" }}>
                                If you are looking to hire a top talent, here at TechKluster we provide end-to-end hiring Process support
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white' }}>Hire Now</Button>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box sx={{
                            p: 3,
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                        }}>
                            <Typography variant="h6" sx={{ mb: 2, fontSize: '2rem' }}>Candidate</Typography>
                            <Typography variant="body1" sx={{ my: 5, fontSize: '1.3rem', textAlign: "left" }}>
                                Join a talent pool consisting of thousands of talented professionals like you, work for top companies and gain remote international working experience
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white' }} onClick={handleSignUp}>Signup</Button>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 8, px: 2, width: '100%' }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ mb: 2, fontSize: '1.75rem' }}>Who are our clients?</Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.3rem', color: currentTheme.palette.text.light }}>
                                TechKluster takes immense pride in its diverse clientele spanning the globe. Whether nurturing the innovative dreams of startups or collaborating with industry giants, our expertise transcends boundaries. With a client roster ranging from dynamic startups to established software powerhouses, we bring tailored solutions to every tech challenge. Our commitment to excellence remains constant, no matter the size or scale. Join our global network of success stories and experience the TechKluster difference firsthand.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ mb: 2, fontSize: '1.75rem' }}>Who can enter our Talent Pool?</Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.3rem', color: currentTheme.palette.text.light }}>
                                TechKluster stands as a beacon of diversity, drawing exceptional candidates from over 30 countries across the world. Our meticulously crafted talent pool, fortified by an ingenious blend of automated and manual vetting processes, boasts a treasure trove of high-caliber individuals. These remarkable talents are poised to unleash their expertise on a global stage, ready to create waves of impact.
                                TechKluster is where borders dissolve, and excellence knows no boundaries.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default JoinUs;
