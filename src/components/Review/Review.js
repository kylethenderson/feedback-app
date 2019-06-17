//import all the necessary bits from node modules
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import GridItem from './ReviewGridItem'
import './Review.css'

class Comments extends Component {

    // on submit post data from redux store to db
    handleSubmit = () => {
        // post review to server
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState
        }).then(response => {
            // then clear the single feedback and redirect to success page
            this.props.dispatch({
                type: 'CLEAR_FEEDBACK',
            })
            this.props.history.push("/success");
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        if (this.props.reduxState.support === '') {
            return <Redirect to='/support' />
        }
        else {
            return (
                <Card id="mainCard" elevation={3}>
                    <Grid container>
                        <Grid item xs={12}>
                            <h3>Feedback Review</h3>
                        </Grid>
                    </Grid>
                    <GridItem history={this.props.history} feedback={'feeling'} value={this.props.reduxState.feeling} />
                    <GridItem history={this.props.history} feedback={'support'} value={this.props.reduxState.support} />
                    <GridItem history={this.props.history} feedback={'understanding'} value={this.props.reduxState.understanding} />
                    <GridItem history={this.props.history} feedback={'comments'} value={this.props.reduxState.comments} />
                    <Grid container alignItems="center">
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit Feedback</Button>
                        </Grid>
                    </Grid>
                </Card>
            )
        }
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.setFeedback,
})

export default connect(mapReduxStateToProps)(Comments)