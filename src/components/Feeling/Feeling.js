import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

class Feeling extends Component {

    handleChange = (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: { feeling: event.target.value }
        })
    }

    
    render() {

        return (
            <CardContent>
                <Grid container justify="center">
                <h3>How are you feeling today?</h3>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="position" name="feeling" value="feeling" onChange={this.handleChange} row className="radioGroup">
                            <FormControlLabel
                                value="1"
                                control={<Radio color="primary" checked={this.props.reduxState.feeling === "1"}/>}
                                label="1"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel
                                value="2"
                                control={<Radio color="primary" checked={this.props.reduxState.feeling === "2"}/>}
                                label="2"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel
                                value="3"
                                control={<Radio color="primary" checked={this.props.reduxState.feeling === "3"}/>}
                                label="3"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel
                                value="4"
                                control={<Radio color="primary" checked={this.props.reduxState.feeling === "4"}/>}
                                label="4"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel
                                value="5"
                                control={<Radio color="primary" checked={this.props.reduxState.feeling === "5"}/>}
                                label="5"
                                labelPlacement="bottom"
                            />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* <form>
                    <h3>How are you feeling today?</h3>
                    <input type="radio"
                        onChange={this.handleChange}
                        value="1"
                        name="feeling"
                        checked={this.props.reduxState.feeling === "1"}
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="2"
                        name="feeling"
                        checked={this.props.reduxState.feeling === "2"}
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="3"
                        name="feeling"
                        checked={this.props.reduxState.feeling === "3"}
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="4"
                        name="feeling"
                        checked={this.props.reduxState.feeling === "4"}
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="5"
                        name="feeling"
                        checked={this.props.reduxState.feeling === "5"}
                    />
                </form> */}
                {this.props.reduxState.feeling !== '' ?
                    <Button variant="contained" color="primary" onClick={() => { this.props.history.push('/understanding') }}>Next</Button>
                    :
                    <Button variant="contained" color="primary" disabled onClick={() => { this.props.history.push('/understanding') }}>Next</Button>
                }
            </CardContent>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.setFeedback,
})

export default connect(mapReduxStateToProps)(Feeling)