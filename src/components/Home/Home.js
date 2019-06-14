import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render () {
        return (
            <>
            <h3>Start New Feedback</h3>
            <button onClick={()=> {this.props.history.push('/feeling')}}>Start Feedback</button>
            </>
        )
    }
}

export default connect()(Home)