import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home/Home'
import Profile from './components/Profile';
import Project from './components/Project/Project';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/new_project" component={Project} />
      </div>
    );
  }
}
// #5918b6
export default App;
