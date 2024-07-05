import { AppBar, Button ,Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

export default function NavBar() {
  const role = localStorage.getItem('roll')
  const navigate = useNavigate()
  return (
    <div>
        <AppBar position='statics'>
        <Toolbar>
        <Typography variant='h6' component={'div'} flexGrow={1}>Employee Management System</Typography>
        <Stack direction={'row'} spacing={2}>
            <Button color='inherit'>{role==="admin"?"Admin Dashboard":"Employee Dashboard"}</Button>
            <Button color='inherit' onClick={()=>navigate('/')}>Logout</Button>
        </Stack>
        </Toolbar>
        </AppBar>
    </div>
  )
}
