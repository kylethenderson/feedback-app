import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import { Redirect } from 'react-router-dom'

class Comments extends Component {

    handleChange = (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: { comments: event.target.value }
        })
    }
    render() {
        if (this.props.reduxState.support === '') {
            return <Redirect to='/support' />
        } else {
            return (
                <Card id="mainCard" elevation={3}>
                    <div>
                        <h3>Any Additional Comments?</h3>
                        <textarea
                            onChange={this.handleChange}
                            placeholder="Nah, I don't need to leave any comments."
                            value={this.props.reduxState.comments}
                            rows="8" cols="70" />
                    </div>
                    <Button variant="contained" color="secondary" onClick={() => { this.props.history.push('/support') }}>Back</Button>
                    <Button variant="contained" color="primary" onClick={() => { this.props.history.push('/review') }}>Review Feedback</Button>
                </Card>
            )
        }
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.setFeedback,
})

export default connect(mapReduxStateToProps)(Comments)