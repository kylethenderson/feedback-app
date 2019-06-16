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
        this.getFeedback();
    }

    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {
            this.props.dispatch({
                type: 'CLEAR_FEEDBACK',
            })
            for (let singleFeedback of response.data) {
                const formattedDate = this.formatDate(singleFeedback.date);
                this.props.dispatch({
                    type: 'GET_FEEDBACK',
                    // payload: response.data,
                    payload: { ...singleFeedback, date: formattedDate },
                })
            }
        }).catch(error => {
            console.log(error);
        });
    }

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
                    {/* {JSON.stringify(this.props.reduxState, null, 2)} */}
                    <Paper>
                        <Table id="adminTable">
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
                </>
            )
        }
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Admin)