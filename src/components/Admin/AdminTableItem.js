import React, { Component } from 'react'

class AdminTableItem extends Component {

    toggleFlagged = () => {
        console.log('toggle clicked');
        // put request to toggle flagged field
    }

    deleteReview = () => {
        console.log('delete clicked');
        // delete request to server 
    }
    render() {
        return(
            <>
            <tr>
                <td></td>
                <td>{this.props.item.feeling}</td>
                <td>{this.props.item.understanding}</td>
                <td>{this.props.item.support}</td>
                <td>{this.props.item.comments}</td>
                <td>{this.props.item.flagged ?
                    <button onClick={this.toggleFlagged}>Yes</button>
                    :
                    <button onClick={this.toggleFlagged}>No</button>}</td>
                <td><button onClick={this.deleteReview}>Delete</button></td>
            </tr>
            </>
        )
    }
}

export default AdminTableItem