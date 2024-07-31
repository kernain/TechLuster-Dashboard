import React from 'react';
import { Box, Button, TextField, Typography, Link, Grid, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';


const Login = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default, // Use theme background color
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 4,
                py: 2,
            }}>
                <Header />
                <Box>
                    <Button variant="outlined" sx={{ mr: 2 }}>Apply Jobs</Button>
                    <Button variant="outlined" sx={{ mr: 2 }}>Login</Button>
                    <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white' }}>Hire a Talent</Button>
                </Box>
            </Box>

            <Box sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: 2,
            }}>
                <Box sx={{
                    width: '100%',
                    maxWidth: '700px', // Increased width of the form
                    backgroundColor: theme.palette.background.default, // Use theme background color
                    padding: '40px',
                    borderRadius: '8px',
                }}>
                    <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
                        Login to Techkluster
                    </Typography>
                    <TextField
                        fullWidth
                        variant="standard"
                        placeholder="test@gmail.com"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        variant="standard"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        sx={{ mb: 2 }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Link href="#" sx={{ color: 'black', textDecoration: 'none' }}>Forgot Password</Link>
                    </Box>
                    <Button fullWidth variant="contained" sx={{ backgroundColor: 'black', color: 'white', mb: 2 }}>
                        LOGIN
                    </Button>
                    <Box sx={{ textAlign: 'center' }}>
                        <Link href="#" sx={{ color: 'black', textDecoration: 'none' }}>Signup</Link>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                backgroundColor: 'black',
                color: 'white',
                py: 4,
                px: 4,
            }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>TechKluster</Typography>
                <Grid container spacing={4}>
                    {[
                        {
                            title: 'Clients',
                            links: ['Schedule a Call', 'How it works', 'Hire Resources']
                        },
                        {
                            title: 'Candidates',
                            links: ['Apply for Jobs', 'Login', 'CV Writing Tips']
                        },
                        {
                            title: 'Company',
                            links: ['Blog', 'Terms and Conditions', 'Privacy Policy', 'Frequently Asked Questions']
                        },
                        {
                            title: 'Remote Job Roles',
                            links: ['Java Developers', 'Python Developers', 'Angular Developers', 'ReactJS Developers', 'GCP Developers', 'GoLang Developers', 'React Native Developers', 'Spring Developers']
                        }
                    ].map((column, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>{column.title}</Typography>
                            {column.title === 'Remote Job Roles' ? (
                                <Grid container spacing={1}>
                                    {column.links.map((link, linkIndex) => (
                                        <Grid item xs={12} sm={6} key={linkIndex}>
                                            <Typography variant="body2" sx={{ mb: 1 }}>
                                                <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>{link}</Link>
                                            </Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : (
                                column.links.map((link, linkIndex) => (
                                    <Typography key={linkIndex} variant="body2" sx={{ mb: 1 }}>
                                        <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>{link}</Link>
                                    </Typography>
                                ))
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Login;
