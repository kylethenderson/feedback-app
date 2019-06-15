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
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Admin)