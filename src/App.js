import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile" component={Profile} />
      </div>
    );
  }
}
// #5918b6
export default App;
