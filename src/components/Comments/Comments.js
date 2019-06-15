import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

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
                    <textarea onChange={this.handleChange} rows="8" cols="70" />
                </div>
                <Button variant="contained" color="secondary" onClick={()=> {this.props.history.push('/support')}}>Back</Button>
                <Button variant="contained" color="primary" onClick={()=> {this.props.history.push('/review')}}>Review Feedback</Button>
            </>
        )
    }
}

export default connect()(Comments)