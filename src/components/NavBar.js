import { AppBar, Button ,Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function NavBar() {
  return (
    <div>
        <AppBar position='statics'>
        <Toolbar>
        <Typography variant='h6' component={'div'} flexGrow={1}>Employee Management System</Typography>
        <Stack direction={'row'} spacing={2}>
            <Button color='inherit'>Admin Dashboard</Button>
            <Button color='inherit'>Logout</Button>
        </Stack>
        </Toolbar>
        </AppBar>
    </div>
  )
}
