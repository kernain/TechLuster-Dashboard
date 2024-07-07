import React, { useState } from 'react';
import { useTheme, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline, IconButton, Box, Typography } from '@mui/material';
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
import logoImage from "../assets/client-icon.png";
import "./SidebarMenu.css";

const drawerWidth = 240;

const SidebarMenu = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleMouseEnter = () => {
        setOpen(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };

    const menuItems = [
        { text: 'Dashboard', icon: <GridViewIcon /> },
        { text: 'User', icon: <PersonIcon /> },
        { text: 'Jobs', icon: <WorkIcon /> },
        { text: 'My Skills', icon: <EditIcon /> },
        { text: 'My Offers', icon: <NoteAddIcon /> },
        { text: 'My Invites', icon: <CalendarTodayIcon /> },
        { text: 'My Interviews', icon: <LaptopMacIcon /> },
        { text: 'Billing and Finance', icon: <AttachMoneyIcon /> },
        { text: 'Customer Support', icon: <HelpOutlineIcon /> },
        { text: 'Account and Security', icon: <SecurityIcon /> },
        { text: 'Logout', icon: <PowerSettingsNewIcon /> },
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
                        width: open ? drawerWidth : `calc(${theme.spacing(7)} + 25px)`,
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
                <List sx={{
                    overflowY: "hidden",
                }}>
                    {menuItems.map((item, index) => (
                        <ListItem
                            key={index}
                            disablePadding
                            sx={{
                                display: 'block', paddingTop: .5, paddingBottom: .5,
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    '&:hover': {
                                        backgroundColor: '#FFA500',
                                        color: '#fff',
                                    },
                                }}
                            >
                                <ListItemIcon
                                    className='navigation-item-icon'
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
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
                </List>
            </Drawer>
        </Box>
    );
};

export default SidebarMenu;
