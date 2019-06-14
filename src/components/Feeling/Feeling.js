import React, { Component } from 'react'
import { connect } from 'react-redux'

class Feeling extends Component {

    handleChange = (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: {feeling: event.target.value}
        })
        this.setState({
            isSelected: true,
        })
    }
    render() {

        return (
            <>
                <form>
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
                </form>
                {this.props.reduxState.feeling !== '' ? 
                <button onClick={()=> {this.props.history.push('/support')}}>Next</button>
                :
                <button disabled onClick={()=> {this.props.history.push('/support')}}>Next</button>
                }
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.setFeedback,
})

export default connect(mapReduxStateToProps)(Feeling)