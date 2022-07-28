import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, 
    TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
// import { getTodos, deleteTodo } from '../../Routes/TodoDBApi';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 50px 60px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#3CB371',
            color: '#FFFFFF',
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

// const useFontStyles = makeStyles({
//     todoFont:{
//         fontSize: 'larger'
//     }
// })

const Dashboard = () => {
    const [todos, setTodos] = useState([]);
    const classes = useStyles();
    // const classesFont = useStyles();
    var today = new Date();
    
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    // console.log(today);
    // constructor() {
    //     var today = new Date(),  
    //     date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //     this.state = {  
    //       currentDate: date   
    //     }
    // }

    useEffect(() => {
        getAllTodos();
    }, []);

    const deleteTodoData = async (id) => {
        // await deleteTodo(id);
        getAllTodos();
    }

    const getAllTodos = async () => {
        // let response = await getTodos();
        // setTodos(response.data);
    }

    // const fontSizeIncrease = () => {
    //     const fontClasses = useFontStyles();
    // }

    // const fontSizeDecrease = () => {
    //     const fontClasses = useFontStyles();
    // }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead} >
                    <TableCell>Mentor Name</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Font Size</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {todos.map((todo) => (
                    <TableRow className={classes.row} key={todo.id}>
                        <TableCell>{todo._id}</TableCell> {/* change it to todo.id to use JSON Server */}
                        <TableCell>{todo.Title}</TableCell>
                        <TableCell>{todo.Description}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" component={Link} to={`/edit/${todo._id}`}><EditIcon /></Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                        <TableCell>
                            <Button color="secondary" variant="contained" onClick={() => deleteTodoData(todo._id)}><DeleteIcon /></Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                        <TableCell>Created on { today }</TableCell>
                        <TableCell><Button color="primary"><AddCircleIcon /></Button><Button color="secondary" ><RemoveCircleIcon /></Button></TableCell>
                        {/* <TableCell><Button variant="outlined" color="primary" onClick={fontSizeIncrease(todo.id)}>+</Button> <Button variant="outlined" color="primary" onClick={fontSizeDecrease(todo.id)}>-</Button></TableCell> */}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Dashboard;