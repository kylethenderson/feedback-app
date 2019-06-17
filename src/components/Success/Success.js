//import all the necessary bit from node modules
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

// render a success page and redirect to beginning of form on start new feedback
class Success extends Component {
    render() {
        return (
            <Card id="mainCard" elevation={3}>
                <h2>Thanks for your submission!</h2>
                <Button variant="contained" color="primary" onClick={() => this.props.history.push('/feeling')}>Begin New Feedback</Button>
            </Card>
        )
    }
}

export default connect()(Success)