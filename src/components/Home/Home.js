import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

class Home extends Component {
    render() {
        return (
            <Card id="mainCard" elevation={3}>
                <h2>New Feedback</h2>
                <Button variant="contained" color="primary" onClick={() => { this.props.history.push('/feeling') }}>Start</Button>
            </Card>
        )
    }
}

export default connect()(Home)