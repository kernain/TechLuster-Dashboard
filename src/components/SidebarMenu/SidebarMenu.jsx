// src/components/SidebarMenu/SidebarMenu.jsx
import React, { useState, useContext } from 'react';
import { useTheme, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline, IconButton, Box, Switch, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import EditIcon from '@mui/icons-material/Edit';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SecurityIcon from '@mui/icons-material/Security';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import logoImage from "../../assets/client-icon.png";
import { ThemeContext } from '../../theme/ThemeContext';
import "./SidebarMenu.css";

const drawerWidth = 240;

const SidebarMenu = () => {
    const theme = useTheme();
    const { toggleTheme, currentTheme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const handleMouseEnter = () => {
        setOpen(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };

    const menuItems = [
        { text: 'Dashboard', icon: <GridViewIcon />, link: '/' },
        { text: 'User', icon: <PersonIcon />, link: '/user' },
        { text: 'Jobs', icon: <WorkIcon />, link: '/my-jobs' },
        { text: 'My Skills', icon: <EditIcon />, link: '/my-skills' },
        { text: 'My Offers', icon: <NoteAddIcon />, link: '/my-offers' },
        { text: 'My Invites', icon: <CalendarTodayIcon />, link: '/my-invites' },
        { text: 'My Interviews', icon: <LaptopMacIcon />, link: '/my-interviews' },
        { text: 'Billing and Finance', icon: <AttachMoneyIcon />, link: '/candidate-billing' },
        { text: 'Customer Support', icon: <HelpOutlineIcon />, link: '/customer-support' },
        { text: 'Account and Security', icon: <SecurityIcon />, link: '/my-account' },
        { text: 'Logout', icon: <PowerSettingsNewIcon />, link: '/logout' },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                open={open}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                PaperProps={{
                    sx: {
                        width: open ? drawerWidth : `calc(${theme.spacing(7)} + 15px)`,
                        transition: theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                        overflowX: 'hidden',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: "hidden",
                        padding: theme.spacing(0, 1),
                        ...theme.mixins.toolbar,
                    }}
                >
                    <IconButton onClick={() => setOpen(!open)}>
                        {open ? <div>TechLuster</div> : <img src={logoImage} alt="Client Logo" style={{ height: '40px', width: 'auto' }} />}
                    </IconButton>
                </Box>
                <List sx={{ overflowY: "hidden" }}>
                    {menuItems.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block', paddingTop: .5, paddingBottom: .5 }}>
                            <ListItemButton
                                component={Link}
                                to={item.link}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2,
                                    '&:hover': {
                                        backgroundColor: '#fc7a1e',
                                        color: '#fff',
                                    },
                                }}
                            >
                                <ListItemIcon
                                    className='navigation-item-icon'
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 0 : 'auto',
                                        justifyContent: 'center',
                                        color: 'inherit',
                                        width: 50,
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ display: open ? "block" : "none", color: 'inherit' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding sx={{ justifyContent: 'center', paddingTop: 2, }}>
                        <Switch
                            checked={currentTheme.palette.mode === 'dark'}
                            onChange={toggleTheme}
                            color="primary"
                            sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': {
                                    color: '#fff',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                    backgroundColor: '#fc7a1e',
                                },
                                '& .MuiSwitch-track': {
                                    backgroundColor: '#ccc',
                                },
                            }}
                        />
                        <Typography variant="body2" sx={{ ml: 1, display: open ? "block" : "none", }}>
                            {currentTheme.palette.mode === 'light' ? 'Light Mode' : 'Dark Mode'}
                        </Typography>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};

export default SidebarMenu;
