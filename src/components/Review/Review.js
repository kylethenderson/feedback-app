import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comments extends Component {

    handleSubmit = () => {
        // post review to db
        this.props.dispatch({
            type: 'CLEAR_FEEDBACK',
        })
        this.props.history.push("/");
    }
    render() {
        return (
            <>
                <div>
                    <h3>Feedback Review</h3>
                    <p>Feelings: {this.props.reduxState.setFeedback.feeling}</p>
                    <p>Support: {this.props.reduxState.setFeedback.support}</p>
                    <p>Understanding: {this.props.reduxState.setFeedback.understanding}</p>
                    <p>Comments: {this.props.reduxState.setFeedback.comments}</p>
                </div>
                <button onClick={this.handleSubmit}>Submit Feedback</button>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Comments)