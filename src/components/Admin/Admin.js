// import necessary bits from node modules
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Redirect } from 'react-router-dom'

//Components
import AdminTableItem from './AdminTableItem'
import './Admin.css'

class Admin extends Component {

    componentDidMount() {
        this.getFeedback(); // once component mounts, get all the data from the db
    }

    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {
            this.props.dispatch({
                type: 'CLEAR_FEEDBACK_LIST',    // ensure the array is empty to begin with
            })
            // then loop through the array from the db and add a single object one at a time
            for (let singleFeedback of response.data) {
                // format the date for the single object before adding to redux store
                const formattedDate = this.formatDate(singleFeedback.date);
                // add single feedback object from db into the redux store
                this.props.dispatch({
                    type: 'SET_FEEDBACK_LIST',
                    payload: { ...singleFeedback, date: formattedDate }, // update the object to send with the formatted date
                })
            }
        }).catch(error => {
            console.log(error);
        });
    }

    // function to formate each date from the ISO date string the db sends 
    formatDate = (date) => {
        const splitDate = date.substring(0, 10).split('-');
        const newDate = splitDate[1] + '/' + splitDate[2] + '/' + splitDate[0];
        return newDate
    }

    render() {
        // if login is false, redirect to the login page. 
        if (!this.props.reduxState.testLogin) {
            return <Redirect to='/login' />;
        }
        // otherwise, return the admin component 
        else {
            return (
                <>
                    {this.props.reduxState.getFeedback.length > 0 ?
                        <Paper id="adminTable">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Feeling</TableCell>
                                        <TableCell>Comprehension</TableCell>
                                        <TableCell>Support</TableCell>
                                        <TableCell>Notes</TableCell>
                                        <TableCell>Needs Review</TableCell>
                                        <TableCell>Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.props.reduxState.getFeedback.map(item => <AdminTableItem key={item.id} item={item} refreshData={this.getFeedback} />)}
                                </TableBody>
                            </Table>
                        </Paper>
                        :
                        // if nothing in the db, just display the following msg
                        <h3 id="adminError">No feedback to review at this time</h3>
                    }
                </>
            )
        }
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Admin)