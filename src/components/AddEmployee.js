import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from 'axios';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

export default function AddEmployee(props) {
  const [employeeData, setEmployeeData] = useState({
    firstName: props.type==="add"?"":props.data.firstName,
    lastName: props.type==="add"?"":props.data.lastName,
    designation: props.type==="add"?"":props.data.designation,
    phoneNumber: props.type==="add"?"":props.data.phoneNumber,
    email: props.type==="add"?"":props.data.email,
    password: props.type==="add"?"":props.data.password,
  });
  
  const onhandleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3006/employeeData',employeeData)
    .then(res =>{
      alert("data added")
      console.log(res)
    })
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <Modal
        open={props.openModal}
        onClose={props.closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={style.header}>
            <Typography>Add Employee</Typography>
            <IconButton onClick={() => props.closeModal()}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              name="firstName"
              value={employeeData.firstName}
              onChange={onhandleInputChange}
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              name="lastName"
              value={employeeData.lastName}
              onChange={onhandleInputChange}
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Designation"
              variant="outlined"
              name="designation"
              value={employeeData.designation}
              onChange={onhandleInputChange}
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              name="phoneNumber"
              value={employeeData.phoneNumber}
              onChange={onhandleInputChange}
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={employeeData.email}
              onChange={onhandleInputChange}
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={employeeData.password}
              onChange={onhandleInputChange}
            ></TextField>
          </Box>
          <Box>
            <Button>Cancel</Button>
            <Button onClick={handleSubmit}>Save</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
