import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comments extends Component {

    handleChange = (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: {comments: event.target.value}
        })
    }
    render() {
        return (
            <>
                <div>
                    <h3>Any Additional Comments?</h3>
                    <textarea onChange={this.handleChange} rows="4" cols="50" />
                </div>
                <button onClick={()=> {this.props.history.push('/support')}}>Back</button>
                <button onClick={()=> {this.props.history.push('/review')}}>Review Feedback</button>
            </>
        )
    }
}

export default connect()(Comments)