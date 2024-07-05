import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Typography,Box,Button } from '@mui/material'
import axios from 'axios';

const style = {
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:"20px"
    },
    employeecard:{
        display:"grid",
        gridTemplateColumns:"repeat(4,1fr)",
        borderRadius:"0.5rem",
        border:"1px solid Black",
        padding:"10px",
        width:"70%"
    },
    employeeList:{
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        justifyContent:"center",
        alignItems:"center",
    }
}
export default function EmployeeDashboard() {
    const [employeeData,setEmployeeData]=useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:3006/employeeData')
        .then(res=> setEmployeeData(res.data))
        .catch(err=>console.log(err))
    },[employeeData])

  return (
    <div>
    <Box>
        <NavBar />
        <Box my={4} sx={style.header}>
            <Typography variant='h4'>Employee List</Typography>
        </Box>
        <Box sx={style.employeeList}>
        {
            employeeData.length>0?( 
            employeeData.map((data)=>(
                <Box key={data.id} sx={style.employeecard}>
                <Box>
                    <Typography>Name</Typography>
                    <Typography>{data.firstName+" "+data.lastName}</Typography>
                </Box>
                <Box>
                    <Typography>Designation</Typography>
                    <Typography>{data.designation}</Typography>
                </Box>
                <Box>
                <Typography>Email</Typography>
                    <Typography>{data.email}</Typography>
                </Box>
                <Box>
                <Typography>Phone Number</Typography>
                    <Typography>{data.phoneNumber}</Typography>
                </Box>
                <Box>
                </Box>
                </Box>
                
            ))
            ):(
                <Box  sx={style.employeecard}> 
                <Typography>No Data Found</Typography>
                </Box>
            )
        }
        </Box>
    </Box>
    </div>
  )
}
