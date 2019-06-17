import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

class Login extends Component {

    // on click of login, make sure credentials state in redux aren't empty, then set login to true and redirect to admin page
    handleLogin = () => {
        if (this.props.reduxState.loginCredentials.username !== '' && this.props.reduxState.loginCredentials.password !== '') {
            this.props.dispatch({
                type: 'LOGIN',
                payload: true
            })
            // clear stored input once the "logged in" state is set to true
            this.props.dispatch({
                type: 'CLEAR_CREDENTIALS',
            })
            this.props.history.push('/admin')
        } else {
            // otherwise, alert the user to enter user and pass
            alert('Please enter Username and Password');
        }
    }

    // set the credentials state in the redux store when user enters username or password
    handleChange = (event) => {
        this.props.dispatch({
            type: 'CREDENTIALS',
            payload: { ...this.props.reduxState.loginCredentials, [event.target.id]: event.target.value }
        })
    }

    // basic login form for user
    render() {
        return (
            <>
                <Card id="mainCard" elevation={3}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={10}>
                            <TextField
                                autoComplete="off"
                                required
                                id="username"
                                label="UserName"
                                onChange={this.handleChange}
                                margin="normal"
                                className="login-input"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={10}>
                            <TextField
                                autoComplete="off"
                                required
                                id="password"
                                type="password"
                                label="Password"
                                onChange={this.handleChange}
                                margin="normal"
                                className="login-input"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={10}>
                            {this.props.reduxState.loginCredentials.username !== '' && this.props.reduxState.loginCredentials.password !== '' ?
                                <Button variant="contained" color="primary" size="large" onClick={this.handleLogin}>Log In</Button>
                                :
                                <Button disabled variant="contained" color="primary" size="large" onClick={this.handleLogin}>Log In</Button>
                            }
                        </Grid>
                    </Grid>
                    <p id="loginAsterisk">*not a real login form. just enter anything.</p>
                </Card>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState
})

export default connect(mapReduxStateToProps)(Login)