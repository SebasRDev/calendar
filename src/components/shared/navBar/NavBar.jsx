import { AppBar, Box, Button, Grow, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';

export const NavBar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>Sebastian</Typography>
          <Button 
            variant="outlined"
            color="error"
            startIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
