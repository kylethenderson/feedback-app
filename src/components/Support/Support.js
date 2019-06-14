import React, { Component } from 'react'
import { connect } from 'react-redux'

class Support extends Component {

    state = {
        isSelected: false,
    }

    handleChange = (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: {support: event.target.value}
        })
        this.setState({
            isSelected: true,
        })
    }
    render() {
        return (
            <>
                <div>
                    <h3>How supported are you feeling?</h3>
                    <input type="radio"
                        onChange={this.handleChange}
                        value="1"
                        name="support"
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="2"
                        name="support"
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="3"
                        name="support"
  
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="4"
                        name="support"
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="5"
                        name="support"
                    />
                </div>
                {this.state.isSelected ? 
                <button onClick={()=> {this.props.history.push('/understanding')}}>Next</button>
                :
                <button disabled onClick={()=> {this.props.history.push('/understanding')}}>Next</button>
                }
            </>
        )
    }
}

export default connect()(Support)