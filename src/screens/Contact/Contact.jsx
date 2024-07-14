import React, { useContext } from 'react';
import { TextField, Button, MenuItem, Box, Grid, Typography, IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ContactImg from "../../assets/contact.jpg";
import { ThemeContext } from '../../theme/ThemeContext';

const categories = [
    { value: 'general', label: 'General' },
    { value: 'support', label: 'Support' },
    { value: 'sales', label: 'Sales' },
];

const ContactForm = () => {
    const { currentTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <Box
                className="profileHeader"
                sx={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    backgroundColor: currentTheme.palette.background.default,
                    color: currentTheme.palette.text.primary,
                    transition: 'background-color 0.3s, color 0.3s',
                }}
            >
                <Box
                    className="page-title"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontFamily: 'Sofia Pro, Arial, sans-serif',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <HelpOutlineIcon sx={{ marginRight: '10px', color: currentTheme.palette.text.primary }} />
                        <Typography variant="h6">Contact</Typography>
                    </Box>
                    <IconButton onClick={toggleTheme} color="inherit">
                        {currentTheme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" component="div" gutterBottom>
                            Contact Form
                        </Typography>
                        <form noValidate autoComplete="off">
                            <TextField
                                fullWidth
                                label="Name"
                                defaultValue="Syed Karnain Kamal"
                                margin="normal"
                                variant="standard"
                                InputProps={{
                                    style: {
                                        fontSize: '13px',
                                        border: 'none',
                                        borderBottom: `1px solid ${currentTheme.palette.text.primary}`,
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                defaultValue="test@gmail.com"
                                margin="normal"
                                variant="standard"
                                InputProps={{
                                    style: {
                                        fontSize: '13px',
                                        border: 'none',
                                        borderBottom: `1px solid ${currentTheme.palette.text.primary}`,
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                select
                                label="Category"
                                defaultValue=""
                                margin="normal"
                                variant="standard"
                                InputProps={{
                                    style: {
                                        fontSize: '13px',
                                        border: 'none',
                                        borderBottom: `1px solid ${currentTheme.palette.text.primary}`,
                                    },
                                }}
                            >
                                {categories.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                fullWidth
                                label="Subject"
                                margin="normal"
                                variant="standard"
                                InputProps={{
                                    style: {
                                        fontSize: '13px',
                                        border: 'none',
                                        borderBottom: `1px solid ${currentTheme.palette.text.primary}`,
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Message"
                                multiline
                                rows={4}
                                margin="normal"
                                variant="standard"
                                InputProps={{
                                    style: {
                                        fontSize: '13px',
                                        border: 'none',
                                        borderBottom: `1px solid ${currentTheme.palette.text.primary}`,
                                    },
                                }}
                            />
                            <Button 
                                variant="contained" 
                                type="submit" 
                                fullWidth
                                sx={{
                                    backgroundColor: '#000000',
                                    color: '#ffffff',
                                    '&:hover': {
                                        backgroundColor: '#333333',
                                    },
                                }}
                            >
                                Submit
                            </Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            sx={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt="Customer support"
                            src={ContactImg}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ContactForm;
