import React, { Component } from 'react'

class AdminTableItem extends Component {
    render() {
        return(
            <>
            <tr>
                <td></td>
                <td>{this.props.item.feeling}</td>
                <td>{this.props.item.understanding}</td>
                <td>{this.props.item.support}</td>
                <td>{this.props.item.comments}</td>
                <td> {/* Flag for needs review */}</td>
                <td><button>Delete</button></td>
            </tr>
            </>
        )
    }
}

export default AdminTableItem