import { Box, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const style = {
  root: {
    borderRadius: "0.5rem",
    boxShadow: "1px 1px 10px gray",
    width: "30%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  login: {
    display: "flex",
    justifyContent: "center",
  },
  signup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "5px",
    alignContents: "center",
    flexWrap: "wrap",
  },
};
export default function Login() {
  const [userData, setUserData] = useState({
    userRoll: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userRoll: "",
    username: "",
    password: "",
  });
  const validate = () => {
    let tempErrors = { userRoll: "", username: "", password: "" };
    if (!userData.userRoll) tempErrors.userRoll = "Role is required.";
    if (!userData.username) tempErrors.username = "Username is required.";
    if (!userData.password) tempErrors.password = "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async () => {
    if (validate()) {
      try {
        const response = await axios.get("http://localhost:3006/employeeData");
        const user = response.data.find(employee => employee.email === userData.username && employee.password === userData.password);
        
        if (user) {
          localStorage.setItem("roll", userData.userRoll);
          alert('Login successful');
          navigate("/dashboard");
        } else {
          alert("Invalid login credentials");
        }
      } catch (error) {
        console.error("There was an error logging in!", error);
      }
    }
  };
  
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center !important",
      }}
    >
      <Box sx={style.root} my={20}>
        <Box sx={style.login}>
          <Typography variant="h4">Login</Typography>
        </Box>
        <FormControl fullWidth sx={style.form}>
          <InputLabel id="demo-simple-select-label">Roll</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="userRoll"
            value={userData.userRoll}
            label="roll"
            onChange={handleInputChange}
            error={!!errors.userRoll}
          >
            <MenuItem value={"admin"}>Admin</MenuItem>
            <MenuItem value={"employee"}>Employee</MenuItem>
          </Select>
          {errors.userRoll && <Typography color="error">{errors.userRoll}</Typography>}
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            error={!!errors.username}
            helperText={errors.username}
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            error={!!errors.password}
            helperText={errors.password}
          ></TextField>
          <Button variant="contained" onClick={() => handleSubmit()}>
            LOGIN
          </Button>
        </FormControl>
        <Box sx={style.signup}>
          <Typography>Create your account</Typography>
          <Link to={"/signup"}>Sign up</Link>
        </Box>
      </Box>
    </div>
  );
}
