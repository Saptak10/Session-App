import {
    Button,
    Checkbox,
    TextField,
    FormLabel,
    Autocomplete,
  } from "@mui/material";

  import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
  import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

  import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

  import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

  import { Box } from "@mui/system";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import courseList from "./Courses.js";

import { sessionForm } from '../api/sessionApi';

// const initialValue = {
//   date: new Date('2014-08-18T21:11:54'),
//   start: new Date('2014-08-18T21:11:54'),
//   end: new Date('2014-08-18T21:11:54'),
//   // courses:{
//   //   id: 0,
//   //   label:""
//   // },
//   // courses:[]
//   }

// const courses = {}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const AddSession = () => {
    const history = useNavigate();
    // const [session, setSession] = useState({initialValue});

    const [date, setDate] = useState(new Date('2014-08-18T21:11:54'));
    const [start, setStart] = useState(new Date('2014-08-18T21:11:54'));
    const [end, setEnd] = useState(new Date('2014-08-18T21:11:54'));

    const handleChangeDate = (e) => {
      setDate(e);
    };

    const handleChangeStart = (e) => {
      setStart(e);
    };

    const handleChangeEnd = (e) => {
      setEnd(e);
      console.log(e);
    };

    // const { start, end,courses } = session;
    // const { date, start, end } = session;
    // const [courses] = session;
    // const {id,label} = courses;
    // console.log(courses);
    // const [ courses ] = session;
    // const [checked, setChecked] = useState(false);
    
    // const handleChange = (e) => {
    //   setSession((prevState) => ({...prevState,[e.target.name]: e.target.value,}));
    //   console.log(e.target.name, "Value", e.target.value);
    // };

    const handleSubmit = async(e) => {
      const session = {date,start,end};
      console.log(e);
      e.preventDefault();
      await sessionForm(session);
      // console.log(user);
        history("/dashboard");
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
    <FormLabel>Mention your availability</FormLabel>
    <LocalizationProvider dateAdapter={AdapterMoment}>

          {/* <DateTimePicker
            // value={start}
            // onChange={handleChange}
            // name="start"
            renderInput={(params) => <TextField name="start" {...params} />}
          />
        <FormLabel>End Time</FormLabel>
          <DateTimePicker
            // value={end}
            // onChange={handleChange}
            name="end"
            renderInput={(params) => <TextField {...params} />}
          /> */}
          <FormLabel>Date</FormLabel>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            value={date}
            onChange={handleChangeDate}
            renderInput={(params) => <TextField {...params} />}
          />
          <FormLabel>Start Time</FormLabel>
        <TimePicker
          label="start"
          value={start}
          onChange={handleChangeStart}
          renderInput={(params) => <TextField {...params} />}
        />
        <FormLabel>End Time</FormLabel>
        <TimePicker
          label="end"
          value={end}
          onChange={handleChangeEnd}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
      
      <FormLabel>Choose your courses</FormLabel>
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={courseList}
            disableCloseOnSelect
            // value = {id}
            // onChange={handleChange}
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                    name="courses"
                    // value = {label}
                    // onChange={handleChange}
                />
                {option.title}
                </li>
            )}
            // style={{ width: 500 }}
            renderInput={(params) => (
                <TextField 
                // value = {courses} 
                // onChange={handleChange}
                {...params} label="Courses" placeholder="Favorites" />
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
  