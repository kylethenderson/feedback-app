import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl'

class Support extends Component {

    handleChange = (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: { support: event.target.value }
        })
    }
    render() {
        return (
            <CardContent>
                <Grid container justify="center">
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="position" name="feeling" value="feeling" onChange={this.handleChange} row className="radioGroup">
                            <FormControlLabel
                                value="1"
                                control={<Radio color="primary" checked={this.props.reduxState.support === "1"}/>}
                                label="1"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel
                                value="2"
                                control={<Radio color="primary" checked={this.props.reduxState.support === "2"}/>}
                                label="2"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel
                                value="3"
                                control={<Radio color="primary" checked={this.props.reduxState.support === "3"}/>}
                                label="3"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel
                                value="4"
                                control={<Radio color="primary" checked={this.props.reduxState.support === "4"}/>}
                                label="4"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel
                                value="5"
                                control={<Radio color="primary" checked={this.props.reduxState.support === "5"}/>}
                                label="5"
                                labelPlacement="bottom"
                            />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/* <div>
                    <h3>How supported are you feeling?</h3>
                    <input type="radio"
                        onChange={this.handleChange}
                        value="1"
                        name="support"
                        checked={this.props.reduxState.support === "1"}
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="2"
                        name="support"
                        checked={this.props.reduxState.support === "2"}
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="3"
                        name="support"
                        checked={this.props.reduxState.support === "3"}

                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="4"
                        name="support"
                        checked={this.props.reduxState.support === "4"}
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="5"
                        name="support"
                        checked={this.props.reduxState.support === "5"}
                    />
                </div> */}
                <button onClick={() => { this.props.history.push('/understanding') }}>Back</button>
                {this.props.reduxState.support !== '' ?
                    <button onClick={() => { this.props.history.push('/comments') }}>Next</button>
                    :
                    <button disabled onClick={() => { this.props.history.push('/comments') }}>Next</button>
                }

            </CardContent>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.setFeedback,
})

export default connect(mapReduxStateToProps)(Support)