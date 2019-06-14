import React, { Component } from 'react'
import { connect } from 'react-redux'

class Understanding extends Component {

    handleChange = (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: {understanding: event.target.value}
        })
        this.setState({
            isSelected: true,
        })
    }

    render() {
        return (
            <>
                <div>
                    <h3>How is you understanding of the material?</h3>
                    <input type="radio"
                        onChange={this.handleChange}
                        value="1"
                        name="understanding"
                        checked={this.props.reduxState.understanding === "1"}
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="2"
                        name="understanding"
                        checked={this.props.reduxState.understanding === "2"}
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="3"
                        name="understanding"
                        checked={this.props.reduxState.understanding === "3"}
  
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="4"
                        name="understanding"
                        checked={this.props.reduxState.understanding === "4"}
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="5"
                        name="understanding"
                        checked={this.props.reduxState.understanding === "5"}
                    />
                </div>
                <button onClick={()=> {this.props.history.push('/support')}}>Back</button>
                {this.props.reduxState.understanding !== '' ? 
                <button onClick={()=> {this.props.history.push('/comments')}}>Next</button>
                :
                <button disabled onClick={()=> {this.props.history.push('/comments')}}>Next</button>
                }
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.setFeedback,
})

export default connect(mapReduxStateToProps)(Understanding)