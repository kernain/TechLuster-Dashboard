import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import AccountDetails from '../../components/AccountDetails/AccountDetails';
import { ThemeContext } from '../../theme/ThemeContext';

const Profile = () => {
    const { currentTheme } = useContext(ThemeContext);

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
                    }}
                >
                    <SecurityIcon sx={{ marginRight: '10px', color: currentTheme.palette.text.primary }} />
                    <Typography variant="h6">My Account</Typography>
                </Box>
            </Box>
            <AccountDetails />
        </>
    );
};

export default Profile;
