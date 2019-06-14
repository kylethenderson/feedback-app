import React, { Component } from 'react'
import { connect } from 'react-redux'

class Understanding extends Component {

    state = {
        isSelected: false,
    }

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
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="2"
                        name="understanding"
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="3"
                        name="understanding"
  
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="4"
                        name="understanding"
                    />
                    <input type="radio"
                        onChange={this.handleChange}
                        value="5"
                        name="understanding"
                    />
                </div>
                {this.state.isSelected ? 
                <button onClick={()=> {this.props.history.push('/comments')}}>Next</button>
                :
                <button disabled onClick={()=> {this.props.history.push('/comments')}}>Next</button>
                }
            </>
        )
    }
}

export default connect()(Understanding)