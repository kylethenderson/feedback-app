import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Header} />
          {JSON.stringify(this.props, null, 2)}
          <Route exact path="/" component={Home} />
          <Route exact path="/feeling" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
          <br />
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(App);
