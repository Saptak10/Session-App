import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    Autocomplete,
    Radio,
    RadioGroup,
  } from "@mui/material";

import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import courseList from "./Courses.js";

import { registerForm } from '../api/userApi';

const initialValue = {
  name: "",
  // type: "",
  // courses: "",
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
  
  const Register = () => {
    const history = useNavigate();
    const [user, setUser] = useState({initialValue});
    const { name } = user;

    const handleChange = (e) => {
      setUser((prevState) => ({...prevState,[e.target.name]: e.target.value,}));
      console.log(e.target.name, "Value", e.target.value);
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      await registerForm(user);
      // console.log(user);
        history("/login");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>Name</FormLabel>
          <TextField
            value={name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          />
          {/* <FormLabel>Choose if you are a student or mentor</FormLabel>

        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="mentor"
            name="type"
        >
            <FormControlLabel value="mentor" control={<Radio />} label="Mentor" />
            <FormControlLabel value="student" control={<Radio />} label="Student" />
        </RadioGroup>

          <FormLabel>Choose your courses</FormLabel>
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={courseList}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                    name="courses"
                />
                {option.title}
                </li>
            )}
            // style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} label="Courses" placeholder="Favorites" />
            )}
            /> */}
          <Button variant="contained" type="submit">
            Register
          </Button>
        </Box>
      </form>
    );
  }

  export default Register;
  