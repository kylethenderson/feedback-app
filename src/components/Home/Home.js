import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class Home extends Component {
    render () {
        return (
            <>
            <h2>New Feedback</h2>
            <Button variant="contained" color="primary" onClick={()=> {this.props.history.push('/feeling')}}>Start</Button>
            </>
        )
    }
}

export default connect()(Home)