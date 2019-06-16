import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'

import './Review.css'

class Comments extends Component {

    handleSubmit = () => {
        // post review to server
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState
        }).then(response => {
            console.log(response);
            this.props.dispatch({
                type: 'CLEAR_FEEDBACK',
            })
            this.props.history.push("/success");
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <Card id="mainCard" elevation={3}>
                <Grid container>
                    <Grid item xs={12}>
                        <h3>Feedback Review</h3>
                    </Grid>
                </Grid>
                <Grid container alignItems="center">
                    <Grid item className="reviewTitle" xs={2}>
                        <p>Feelings:</p>
                    </Grid>
                    <Grid item xs={8}>
                        <p>{this.props.reduxState.feeling}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <Icon fontSize="small" onClick={() => { this.props.history.push('/feeling') }} className="icon">edit</Icon>
                    </Grid>
                </Grid>
                <Grid container alignItems="center">
                    <Grid item className="reviewTitle" xs={2}>
                        <p>Support:</p>
                    </Grid>
                    <Grid item xs={8}>
                        <p>{this.props.reduxState.support}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <Icon fontSize="small" onClick={() => { this.props.history.push('/support') }} className="icon">edit</Icon>
                    </Grid>
                </Grid>
                <Grid container alignItems="center">
                    <Grid item className="reviewTitle" xs={2}>
                        <p>Understanding:</p>
                    </Grid>
                    <Grid item xs={8}>
                        <p>{this.props.reduxState.understanding}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <Icon fontSize="small" onClick={() => { this.props.history.push('/understanding') }} className="icon">edit</Icon>
                    </Grid>
                </Grid>
                <Grid container alignItems="center">
                    <Grid item className="reviewTitle" xs={2}>
                        <p>Comments:</p>
                    </Grid>
                    <Grid item xs={8}>
                        <p>{this.props.reduxState.comments}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <Icon fontSize="small" onClick={() => { this.props.history.push('/comments') }} className="icon">edit</Icon>
                    </Grid>
                </Grid>
                <Grid container alignItems="center">
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit Feedback</Button>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.setFeedback,
})

export default connect(mapReduxStateToProps)(Comments)