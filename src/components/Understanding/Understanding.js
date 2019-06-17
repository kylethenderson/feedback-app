// import all necessary bits from node modules
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'

class Understanding extends Component {

    // when a user clicks any of the radio buttons, update the understanding key/value pair in the feedback object in redux
    handleChange = (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: { understanding: event.target.value }
        })
    }

    // if feeling in the redux store is empty, redirect to the home, base route to start new feedback
    render() {
        if (this.props.reduxState.feeling === '') {
            return <Redirect to='/' />
        }
        else {
            return (
                <Card id="mainCard" elevation={3}>
                    <CardContent>
                        <Grid container justify="center">
                            <h3>How is your understanding of the material?</h3>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="position" name="feeling" value="feeling" onChange={this.handleChange} row className="radioGroup">
                                    <FormControlLabel
                                        value="1"
                                        control={<Radio color="primary" checked={this.props.reduxState.understanding === "1"} />}
                                        label="1"
                                        labelPlacement="bottom"
                                    />
                                    <FormControlLabel
                                        value="2"
                                        control={<Radio color="primary" checked={this.props.reduxState.understanding === "2"} />}
                                        label="2"
                                        labelPlacement="bottom"
                                    />
                                    <FormControlLabel
                                        value="3"
                                        control={<Radio color="primary" checked={this.props.reduxState.understanding === "3"} />}
                                        label="3"
                                        labelPlacement="bottom"
                                    />
                                    <FormControlLabel
                                        value="4"
                                        control={<Radio color="primary" checked={this.props.reduxState.understanding === "4"} />}
                                        label="4"
                                        labelPlacement="bottom"
                                    />
                                    <FormControlLabel
                                        value="5"
                                        control={<Radio color="primary" checked={this.props.reduxState.understanding === "5"} />}
                                        label="5"
                                        labelPlacement="bottom"
                                    />

                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Button variant="contained" color="secondary" onClick={() => { this.props.history.push('/feeling') }}>Back</Button>
                        {this.props.reduxState.understanding !== '' ?
                            <Button variant="contained" color="primary" onClick={() => { this.props.history.push('/support') }}>Next</Button>
                            :
                            <Button variant="contained" color="primary" disabled onClick={() => { this.props.history.push('/support') }}>Next</Button>
                        }
                    </CardContent>
                </Card>
            )
        }
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.setFeedback,
})

export default connect(mapReduxStateToProps)(Understanding)