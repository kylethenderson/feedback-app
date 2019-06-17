import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'

class Display extends Component {
    render() {
        if (this.props.history.location.pathname === '/feeling' ||
            this.props.history.location.pathname === '/understanding' ||
            this.props.history.location.pathname === '/support' ||
            this.props.history.location.pathname === '/comments') {
            return <>
                <Card elevation={3} id="reviewDisplay">
                    <h3>Review Feedback</h3>
                    <p>How are you feeling? {this.props.reduxState.setFeedback.feeling}</p>
                    <p>How is you understanding? {this.props.reduxState.setFeedback.understanding}</p>
                    <p>Are you supported? {this.props.reduxState.setFeedback.support}</p>
                    <p>Additional comments? {this.props.reduxState.setFeedback.comments}</p>
                </Card>
            </>
        } else {
            return <></>
        }
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Display)