import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
// import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import GridItem from './ReviewGridItem'
import './Review.css'

class Comments extends Component {

    handleSubmit = () => {
        // post review to server
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState
        }).then(response => {
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
                <GridItem feedback={'feeling'} value={this.props.reduxState.feeling} />
                <GridItem feedback={'support'} value={this.props.reduxState.support} />
                <GridItem feedback={'understanding'} value={this.props.reduxState.understanding} />
                <GridItem feedback={'comments'} value={this.props.reduxState.comments} />
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