// import all the necessary bits from node modules
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

class Home extends Component {
    // clear the single feedback state in redux when user starts new feedback
    startFeedback = () => {
        this.props.dispatch({
            type: 'CLEAR_FEEDBACK'
        })
        this.props.history.push('/feeling');
    }
    // render a start page
    render() {
        return (
            <Card id="mainCard" elevation={3}>
                <h2>Ready to leave some feedback?</h2>
                <Button size="large" variant="contained" color="primary" onClick={this.startFeedback}>Yeah! Let's do this!</Button>
            </Card>
        )
    }
}

export default connect()(Home)