import { Box, TextField, Typography,Button } from "@mui/material";
import React, {useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link ,useNavigate} from "react-router-dom";
const style = {
  root: {
    borderRadius: "0.5rem",
    boxShadow: "1px 1px 10px gray",
    width: "30%",
    padding: "1rem",
    display:"flex",
    flexDirection:"column",
    gap:"20px"
  },
  form:{
    display:"flex",
    flexDirection:"column",
    gap:"40px"
  },
  login:{
    display:"flex",
    justifyContent:"center",
  },
  signup:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    gap:"5px",
    alignContents:"center",
    flexWrap:"wrap",
  }
};
export default function Login() {
    const [roll, setRoll] = useState('');
  const handleChange = (event) => {
    setRoll(event.target.value);
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
            value={roll}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={1}>Admin</MenuItem>
            <MenuItem value={2}>Employee</MenuItem>
          </Select>
          <TextField id="outlined-basic" label="Username" variant="outlined" ></TextField>
          <TextField id="outlined-basic" label="Password" variant="outlined" type="password" ></TextField>
          <Button variant="contained" onClick={()=>navigate('/admindashboard')}>LOGIN</Button>
        </FormControl>
        <Box sx={style.signup}>
        <Typography>Create your account</Typography>
        <Link to={'/signup'}>Sign up</Link>
        </Box>
      </Box>
    </div>
  );
}
