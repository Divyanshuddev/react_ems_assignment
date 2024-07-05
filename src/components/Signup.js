import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router";

const style = {
  borderRadius: "0.5rem",
    boxShadow: "1px 1px 10px gray",
    width: "30%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "20px",

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

export default function Signup(props) {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const onhandleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = signUpData.firstName ? "" : "First Name is required.";
    tempErrors.lastName = signUpData.lastName ? "" : "Last Name is required.";
    tempErrors.designation = signUpData.designation ? "" : "Designation is required.";
    tempErrors.phoneNumber = signUpData.phoneNumber ? "" : "Phone Number is required.";
    tempErrors.email = signUpData.email ? "" : "Email is required.";
    tempErrors.password = signUpData.password ? "" : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      axios
        .post("http://localhost:3006/employeeData", signUpData)
        .then((res) => {
          alert("Account created successfully");
          localStorage.setItem('roll','employee');
          navigate('/dashboard')
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"7rem"}}>
        <Box sx={style}>
          <Box sx={style.header}>
            <Typography variant="h5">Sign Up</Typography>
          </Box>
          <Box sx={style.formContainer}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              name="firstName"
              value={signUpData.firstName}
              onChange={onhandleInputChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              name="lastName"
              value={signUpData.lastName}
              onChange={onhandleInputChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
            <TextField
              id="outlined-basic"
              label="Designation"
              variant="outlined"
              name="designation"
              value={signUpData.designation}
              onChange={onhandleInputChange}
              error={!!errors.designation}
              helperText={errors.designation}
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              name="phoneNumber"
              value={signUpData.phoneNumber}
              onChange={onhandleInputChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={signUpData.email}
              onChange={onhandleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={signUpData.password}
              onChange={onhandleInputChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Box>
          <Box sx={{display:"flex",justifyContent:"flex-end",flexDirection:"row",gap:"10px"}} my={2}>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
            <Button variant="contained" onClick={handleSubmit}>Sign Up</Button>
          </Box>
        </Box>
    </div>
  );
}
