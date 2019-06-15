import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class Admin extends Component {

    componentDidMount() {
        this.getFeedback();
    }

    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then( response => {
            console.log(response.data)
            this.props.dispatch({
                type: 'GET_FEEDBACK',
                payload: response.data,
            })
        }).catch( error => {
            console.log(error);
        });
    }

    render () {
        return (
            <>
            {JSON.stringify(this.props.reduxState, null, 2)}
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Notes</th>
                        <th>Needs Review</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="7"></td>
                    </tr>
                </tfoot>
            </table>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.getFeedback,
})

export default connect(mapReduxStateToProps)(Admin)