import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Button from '@material-ui/core/Button'

class Comments extends Component {

    handleSubmit = () => {
        // post review to server
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState
        }).then( response => {
            console.log(response);
            this.props.dispatch({
                type: 'CLEAR_FEEDBACK',
            })
            this.props.history.push("/success");
        }).catch( error => {
            console.log(error);
        })
    }
    render() {
        return (
            <>
                <div>
                    <h3>Feedback Review</h3>
                    <p>Feelings: {this.props.reduxState.feeling}</p>
                    <p>Support: {this.props.reduxState.support}</p>
                    <p>Understanding: {this.props.reduxState.understanding}</p>
                    <p>Comments: {this.props.reduxState.comments}</p>
                </div>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit Feedback</Button>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.setFeedback,
})

export default connect(mapReduxStateToProps)(Comments)