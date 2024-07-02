import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Typography,Box,Button } from '@mui/material'
import AddEmployee from './AddEmployee';
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
        gridTemplateColumns:"repeat(5,1fr)",
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
export default function AdminDashboard() {
    const [open,setOpen]=useState(false);
    const [type,setType]=useState('');
    const [editData,setEditData]=useState([]);
    const handleClose = ()=>{
        setOpen(false);
    }
    const [employeeData,setEmployeeData]=useState([]);
    const handleDelete=(id)=>{
        console.log(id);
        axios.delete('http://localhost:3006/employeeData/'+id)
        .then(res=>alert("data is deleted"))
        .catch(err=>console.log(err))
    }
    const handleEdit=(id)=>{
        console.log(id);
        axios.get('http://localhost:3006/employeeData/'+id)
        .then(res=> setEditData(res.data))
        .catch(err=>console.log(err))
        console.log(editData);
    }
    useEffect(()=>{
        setType('edit')
        setOpen(true);
    },[editData])
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
            <Button variant='contained' onClick={()=>{setOpen(true);setType('add')}}>Add Employee</Button>
        </Box>
        <Box sx={style.employeeList}>
        {
            employeeData.map((data)=>(
                <Box key={data.id} sx={style.employeecard}>
                {/* <Typography >{data.firstName}</Typography>
                <Button onClick={()=>handleEdit(data.id)}>Edit</Button>
                <Button onClick={()=>handleDelete(data.id)}>Delete {data.id}</Button> */}
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
                <Button onClick={()=>handleEdit(data.id)}>Edit</Button>
                </Box>
                <Box>
                    <Button onClick={()=>handleDelete(data.id)}>Delete {data.id}</Button>
                </Box>
                </Box>
                
            ))
        }
        </Box>
    </Box>
    {
        open && 
        <AddEmployee 
        openModal={open}
        closeModal={handleClose}
        type={type}
        data={editData}
         />
    }
    </div>
  )
}
