import { Box, TextField, Typography,Button } from "@mui/material";
import React, {useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router";
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
  button:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    gap:"5px",
    alignContents:"center",
    flexWrap:"wrap",
  }
};
export default function Signup() {
    const navigate=useNavigate();

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
        <Typography variant="h4">Signup</Typography>
      </Box>
        <FormControl fullWidth sx={style.form}>
        <Box sx={style.button}>
        <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
          <Button variant="contained">SIGUP</Button>
        </Box>
        </FormControl>
      </Box>
    </div>
  );
}
