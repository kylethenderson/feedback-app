import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'

class Header extends Component {

    // set the testLogin state to false on logout button clicks
    handleLogout = () => {
        this.props.dispatch({
            type: 'LOGIN',
            payload: false,
        });
        this.props.history.push('/')
    }
    // render the header with specific buttons based on the testLogin boolean, and which url the user is on
    render() {
        return (
            <>
                {this.props.reduxState ?
                    <header className="App-header">
                        <h1 className="App-title">Prime Academy Feedback Form</h1>
                        {this.props.history.location.pathname === '/admin' ?
                            <>
                                <Button size="small" id="homeButton" variant="contained" onClick={() => { this.props.history.push('/') }}>Home</Button>
                                <Button size="small" id="loginButton" variant="contained" onClick={this.handleLogout}>Logout</Button>
                            </>
                            :
                            <>
                                <Button size="small" id="homeButton" variant="contained" onClick={() => { this.props.history.push('/') }}>Home</Button>
                                <Button size="small" id="loginButton" variant="contained" onClick={() => { this.props.history.push('/admin') }}>Admin</Button>
                            </>
                        }
                    </header>
                    :
                    <header className="App-header">
                        <h1 className="App-title">Prime Academy Feedback Form</h1>
                        {this.props.history.location.pathname === '/login' ?
                            <>
                                <Button size="small" id="homeButton" variant="contained" onClick={() => { this.props.history.push('/') }}>Home</Button>
                                <Button size="small" disabled id="loginButton" variant="contained" onClick={() => { this.props.history.push('/login') }}>Login</Button>
                            </>
                            :
                            <>
                                <Button size="small" id="homeButton" variant="contained" onClick={() => { this.props.history.push('/') }}>Home</Button>
                                <Button size="small" id="loginButton" variant="contained" onClick={() => { this.props.history.push('/login') }}>Login</Button>
                            </>
                        }

                    </header>
                }
            </>
        )
    }
}

const mapReduxStoreToProps = (reduxState) => ({
    reduxState: reduxState.testLogin
})

export default connect(mapReduxStoreToProps)(Header)