// import necessary bits from node modules
import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

// Components
import Header from '../Header/Header'
import Home from '../Home/Home'
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
import Success from '../Success/Success'
import Display from '../Display/Display'
import Admin from '../Admin/Admin'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Route path="/" component={Header} />
            <Grid container alignItems="center" justify="center">
              <Grid item xs={6}>
                <Route exact path="/" component={Home} />
                <Route exact path="/feeling" component={Feeling} />
                <Route exact path="/understanding" component={Understanding} />
                <Route exact path="/support" component={Support} />
                <Route exact path="/comments" component={Comments} />
                <Route exact path="/review" component={Review} />
                <Route exact path="/success" component={Success} />
                <Route exact path="/login" component={Login} />
              </Grid>
              <Grid item xs={10} container justify="center">
                <Route exact path="/admin" component={Admin} />
              </Grid>

              {/* DISCLAIMER REGARDING CONSTANT FEEDBACK REVIEW COMPONENT BELOW*/}

              {/* I wasn't a huge fan of having the feedback displayed throughout the 
              entire form process, as I felt it detracted from the form process, and not
              how a normal feedback form might flow.
              BUT since it was in the readme, I did write the component to do it. 
              I would prefer this component be commented out or deleted, but again, 
              since it was in the instructions, I left it in.
              Comment out the 3 lines below to see form as I preferred          */}
              <Grid item xs={6} >
                <Route path="/" component={Display} />
              </Grid>

            </Grid>
            <br />
          </div>
        </Router>
        <Footer />
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(App);
