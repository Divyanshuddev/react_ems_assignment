import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
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
    alignItem: "center",
    alignContent: "center",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

export default function AddEmployee(props) {
  const [employeeData, setEmployeeData] = useState({
    firstName: props.type === "add" ? "" : props.data.firstName,
    lastName: props.type === "add" ? "" : props.data.lastName,
    designation: props.type === "add" ? "" : props.data.designation,
    phoneNumber: props.type === "add" ? "" : props.data.phoneNumber,
    email: props.type === "add" ? "" : props.data.email,
    password: props.type === "add" ? "" : props.data.password,
  });
  const [errors, setErrors] = useState({});
  const onhandleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = employeeData.firstName ? "" : "First Name is required.";
    tempErrors.lastName = employeeData.lastName ? "" : "Last Name is required.";
    tempErrors.designation = employeeData.designation ? "" : "Designation is required.";
    tempErrors.phoneNumber = employeeData.phoneNumber ? "" : "Phone Number is required.";
    tempErrors.email = employeeData.email ? "" : "Email is required.";
    tempErrors.password = employeeData.password ? "" : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      axios
        .post("http://localhost:3006/employeeData", employeeData)
        .then((res) => {
          alert("Data added successfully");
          console.log(res);
          props.closeModal();
        })
        .catch((err) => console.log(err));
    }
  };
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
            <Typography variant="h5">Add Employee</Typography>
            <IconButton onClick={() => props.closeModal()}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={style.formContainer}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              name="firstName"
              value={employeeData.firstName}
              onChange={onhandleInputChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              name="lastName"
              value={employeeData.lastName}
              onChange={onhandleInputChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Designation"
              variant="outlined"
              name="designation"
              value={employeeData.designation}
              onChange={onhandleInputChange}
              error={!!errors.designation}
              helperText={errors.designation}
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              name="phoneNumber"
              type="tel"
              value={employeeData.phoneNumber}
              onChange={onhandleInputChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={employeeData.email}
              onChange={onhandleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={employeeData.password}
              onChange={onhandleInputChange}
              error={!!errors.password}
              helperText={errors.password}
            ></TextField>
          </Box>
          <Box sx={{display:"flex",justifyContent:"flex-end",flexDirection:"row",gap:"10px"}} my={2}>
            <Button variant="contained" onClick={props.closeModal}>Cancel</Button>
            <Button variant="contained" onClick={()=>{handleSubmit();props.closeModal()}}>Save</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
