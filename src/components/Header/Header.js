import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

class Header extends Component {
    render() {
        return (
            <>
            {/* {JSON.stringify(this.props, null, 2)} */}
            {this.props.history.location.pathname !== '/admin' ?
            <header className="App-header">
                <h1 className="App-title">Prime Academy Feedback Form</h1>
            </header>
                :
            <header className="App-header">
                <h1 className="App-title">Prime Academy Admin View</h1>
                <Button id="homeButton" variant="contained" onClick={()=>this.props.history.push('/')}>Home</Button>
            </header>
                }
            </>
        )
    }
}

export default Header