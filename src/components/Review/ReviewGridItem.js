import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

class GridItem extends Component {

    handleRedirect = () => {
        this.props.history.push({
            pathname: this.props.feedback,
        });
    }
    render() {
        return (
            <>
                <Grid container alignItems="center">
                    <Grid item className="reviewTitle" xs={3}>
                        <p>{this.props.feedback}:</p>
                    </Grid>
                    <Grid item xs={8} align="left">
                        <p>{this.props.value}</p>
                    </Grid>
                    <Grid item xs={1}>
                        <Icon fontSize="small" onClick={this.handleRedirect} className="icon">edit</Icon>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default GridItem
