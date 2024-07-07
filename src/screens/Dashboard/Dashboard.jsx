import { Box, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

const Dashboard = () => {
    return (
        <>
            <Box className="DashboardHeader">
                <Box 
                className="page-title"
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
                >
                    <HomeIcon />
                    <Typography>Dashboard</Typography>
                </Box>
                <Box class="user-greet">
                    
                </Box>
            </Box>
        </>
    )
}

export default Dashboard