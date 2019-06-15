import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

class Success extends Component {
    render () {
        return (
            <>
            <h2>Thanks for your submission!</h2>
            <Button variant="contained" color="primary" onClick={()=>this.props.history.push('/feeling')}>Begin New Feedback</Button>
            </>
        )
    }
}

export default connect()(Success)