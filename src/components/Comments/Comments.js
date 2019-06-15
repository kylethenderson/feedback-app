import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

class Comments extends Component {

    handleChange = (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: {comments: event.target.value}
        })
    }
    render() {
        return (
            <Card id="mainCard" elevation={3}>
                <div>
                    <h3>Any Additional Comments?</h3>
                    <textarea onChange={this.handleChange} rows="8" cols="70" />
                </div>
                <Button variant="contained" color="secondary" onClick={()=> {this.props.history.push('/support')}}>Back</Button>
                <Button variant="contained" color="primary" onClick={()=> {this.props.history.push('/review')}}>Review Feedback</Button>
            </Card>
        )
    }
}

export default connect()(Comments)