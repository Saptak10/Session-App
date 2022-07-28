import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, 
    TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';
import { getSession } from '../api/sessionApi';

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

const Dashboard = () => {

    const [sessions, setSession] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        getAllSession();
    }, []);

    const getAllSession = async () => {
        let response = await getSession();
        setSession(response.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead} >
                    <TableCell>Mentor Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Available From</TableCell>
                    <TableCell>Till</TableCell>
                    <TableCell>Course</TableCell>
                    <TableCell>Duration</TableCell>
                    <TableCell>Book</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sessions.map((session) => (
                    <TableRow className={classes.row} key={session.id}>
                        <TableCell>{session._id}</TableCell>
                        <TableCell>{session.Title}</TableCell>
                        <TableCell>{session.Description}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" component={Link} to={`/edit/${session._id}`}><AddCircleIcon /></Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Dashboard;