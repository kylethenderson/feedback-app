import React, { Component } from 'react'
import axios from 'axios'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'

class AdminTableItem extends Component {

    toggleFlagged = () => {
        console.log('toggle clicked');
        axios({
            method: 'PUT',
            url: '/feedback',
            data: {
                flagged: this.props.item.flagged,
                id: this.props.item.id,
            },
        }).then(response => {
            console.log(response);
            this.props.refreshData();
        }).catch(error => {
            console.log(error);
        });
    }

    deleteReview = () => {
        console.log('delete clicked');
        axios({
            method: 'DELETE',
            url: `/feedback/${this.props.item.id}`
        }).then(response => {
            this.props.refreshData();
        }).catch(error => {
            console.log(error);
        });
    }
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.item.date}</TableCell>
                <TableCell>{this.props.item.feeling}</TableCell>
                <TableCell>{this.props.item.understanding}</TableCell>
                <TableCell>{this.props.item.support}</TableCell>
                <TableCell>{this.props.item.comments}</TableCell>
                <TableCell>{this.props.item.flagged ?
                    <Button color="secondary" variant="contained" size="small" onClick={this.toggleFlagged}>Yes</Button>
                    :
                    <Button color="default" variant="contained" size="small" onClick={this.toggleFlagged}>No</Button>}
                </TableCell>
                <TableCell>
                    <IconButton onClick={this.deleteReview} aria-label="Delete">
                        <Icon id="icon">delete_outline</Icon>
                    </IconButton>
                </TableCell>
            </TableRow>
        )
    }
}

export default AdminTableItem