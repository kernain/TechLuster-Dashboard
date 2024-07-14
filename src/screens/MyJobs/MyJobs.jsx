import AttachMoney from '@mui/icons-material/AttachMoney'
import { Box, Typography } from '@mui/material'
import React from 'react'
import WorkIcon from '@mui/icons-material/Work';


const MyJobs = () => {
    return (
        <>
            <Box className="profileHeader" sx={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Box
                    className="page-title"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontFamily: 'Sofia Pro, Arial, sans-serif',
                    }}
                >
                    <WorkIcon sx={{ marginRight: '10px' }} />
                    <Typography variant="h6">My Jobs</Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                fontFamily: 'Sofia Pro, Arial, sans-serif',
                fontSize: "13px",
                color: "#9d9d9d"
            }}>
                <Typography variant='text'>You haven't applied for any job yet.
                </Typography>
            </Box>
        </>
    )
}

export default MyJobs