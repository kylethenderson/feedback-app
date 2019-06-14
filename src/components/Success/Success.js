import React, { Component } from 'react'
import { connect } from 'react-redux'

class Success extends Component {
    render () {
        return (
            <>
            <h1>Thanks for your submission!</h1>
            <button onClick={()=>this.props.history.push('/feeling')}>Begin New Feedback</button>
            </>
        )
    }
}

export default connect()(Success)