import React, { Component } from 'react'
import { connect } from 'react-redux'

class Admin extends Component {
    render () {
        return (
            <>
            {JSON.stringify(this.props.reduxState, null, 2)}
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Admin)