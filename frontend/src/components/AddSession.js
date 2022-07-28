import {
    Button,
    Checkbox,
    TextField,
    FormLabel,
    Autocomplete,
  } from "@mui/material";

  import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
  import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

  import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import courseList from "./Courses.js";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const AddSession = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      description: "",
      price: "",
      author: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/books", {
          name: String(inputs.name),
          author: String(inputs.author),
          description: String(inputs.description),
          price: Number(inputs.price),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/books"));
    };

    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

    const handleDT = (newValue) => {
      setValue(newValue);
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

    <LocalizationProvider dateAdapter={AdapterMoment}>
      <FormLabel>Start Time</FormLabel>

          <DateTimePicker
            value={value}
            onChange={handleDT}
            renderInput={(params) => <TextField {...params} />}
          />
        <FormLabel>End Time</FormLabel>
          <DateTimePicker
            value={value}
            onChange={handleDT}
            renderInput={(params) => <TextField {...params} />}
          />
    </LocalizationProvider>
      
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
            />
  
          <Button variant="contained" type="submit">
            Add Session
          </Button>
        </Box>
      </form>
    );
  };

  export default AddSession;
  