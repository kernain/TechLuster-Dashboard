import AttachMoney from '@mui/icons-material/AttachMoney'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Billing = () => {
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
                    <AttachMoney sx={{ marginRight: '10px' }} />
                    <Typography variant="h6">Billing & Finance</Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                fontFamily: 'Sofia Pro, Arial, sans-serif',
                fontSize: "13px",
                color: "#9d9d9d"
            }}>
                <Typography variant='text'>No billing and finance data available at the moment
                </Typography>
            </Box>
        </>
    )
}

export default Billing