import React, { useState, useContext } from 'react';
import { Box, Typography, TextField, Button, IconButton, Modal } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { ThemeContext } from '../../theme/ThemeContext';
import './AccountDetails.css';

const AccountDetails = () => {
    const { currentTheme } = useContext(ThemeContext);
    const [editMode, setEditMode] = useState(false);
    const [profileData, setProfileData] = useState({
        fullName: 'Syed Karnain Kamal',
        email: 'test@gmail.com',
        state: 'Sindh',
        city: 'Karachi',
        country: 'Pakistan',
        phoneNumber: '1231465465',
        address: 'Pakistan',
        password: '**********'
    });

    const [passwordModalOpen, setPasswordModalOpen] = useState(false);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setEditMode(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePasswordChange = () => {
        setPasswordModalOpen(true);
    };

    const handlePasswordModalClose = () => {
        setPasswordModalOpen(false);
    };

    return (
        <Box sx={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
                <Box sx={{
                    width: '70%',
                    backgroundColor: currentTheme.palette.background.paper,
                    color: currentTheme.palette.text.primary,
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: 1,
                    marginRight: '10px',
                    transition: 'background-color 0.3s, color 0.3s',
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <Typography variant="h6" sx={{ fontSize: '13px' }}>Account Details</Typography>
                        <IconButton onClick={editMode ? handleSaveClick : handleEditClick}>
                            {editMode ? <SaveIcon /> : <EditIcon />}
                        </IconButton>
                    </Box>
                    <Box className="account-form" sx={{ display: 'flex', flexWrap: 'wrap', gap: "1rem", }}>
                        {['fullName', 'email', 'state', 'city', 'country', 'phoneNumber', 'address'].map((field) => (
                            <Box key={field} sx={{ flexBasis: '48%', marginBottom: '16px' }}>
                                <Typography sx={{ fontSize: '13px', marginBottom: '4px' }}>
                                    {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                                </Typography>
                                <TextField
                                    fullWidth
                                    name={field}
                                    value={profileData[field]}
                                    onChange={handleChange}
                                    InputProps={{
                                        readOnly: !editMode,
                                        style: {
                                            fontSize: '13px',
                                            border: 'none',
                                            borderBottom: editMode ? `1px solid ${currentTheme.palette.divider}` : 'none',
                                            color: currentTheme.palette.text.primary,
                                        },
                                    }}
                                    variant="standard"
                                    size="small"
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box sx={{
                    width: '30%',
                    backgroundColor: currentTheme.palette.background.paper,
                    color: currentTheme.palette.text.primary,
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: 1,
                    height: 'fit-content',
                    transition: 'background-color 0.3s, color 0.3s',
                }}>
                    <Typography variant="h6" sx={{ fontSize: '13px', marginBottom: '20px' }}>Account Security</Typography>
                    <Box sx={{ marginBottom: '20px', display: "flex", alignItems: "center" }}>
                        <Typography sx={{ fontSize: '13px', marginBottom: '4px' }}>Password:</Typography>
                        <Typography sx={{ fontSize: '13px', marginBottom: '', fontWeight: 600, }}>*******</Typography>
                        <Button variant="text" onClick={handlePasswordChange} sx={{ fontSize: '13px', color: currentTheme.palette.text.primary }}>
                            Change
                        </Button>
                    </Box>
                    <Button variant="contained" sx={{
                        backgroundColor: currentTheme.palette.mode === 'dark' ? currentTheme.palette.background.default : currentTheme.palette.text.primary,
                        color: currentTheme.palette.mode === 'dark' ? currentTheme.palette.text.primary : currentTheme.palette.background.default,
                        '&:hover': {
                            backgroundColor: currentTheme.palette.mode === 'dark' ? currentTheme.palette.background.paper : currentTheme.palette.text.secondary,
                        },
                    }}>
                        Delete my Account
                    </Button>
                </Box>
            </Box>

            <Modal open={passwordModalOpen} onClose={handlePasswordModalClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: currentTheme.palette.background.paper,
                    color: currentTheme.palette.text.primary,
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: 24,
                    minWidth: '300px',
                    transition: 'background-color 0.3s, color 0.3s',
                }}>
                    <Typography variant="h6" sx={{ marginBottom: '20px' }}>Reset Password</Typography>
                    <Typography sx={{ fontSize: '13px', marginBottom: '20px' }}>
                        Enter the email address associated with your account, and we'll email you a link to reset your password.
                    </Typography>
                    <TextField
                        fullWidth
                        name="email"
                        placeholder="Email"
                        variant="standard"
                        size="small"
                        sx={{
                            marginBottom: '20px',
                            input: {
                                color: currentTheme.palette.text.primary,
                            },
                        }}
                    />
                    <Button variant="contained" sx={{
                        backgroundColor: currentTheme.palette.mode === 'dark' ? currentTheme.palette.background.default : currentTheme.palette.text.primary,
                        color: currentTheme.palette.mode === 'dark' ? currentTheme.palette.text.primary : currentTheme.palette.background.default,
                        '&:hover': {
                            backgroundColor: currentTheme.palette.mode === 'dark' ? currentTheme.palette.background.paper : currentTheme.palette.text.secondary,
                        },
                    }}>
                        Send Reset Link
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
}

export default AccountDetails;
