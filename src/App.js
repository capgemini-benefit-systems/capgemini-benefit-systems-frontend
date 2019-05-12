import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home/Home'
import Profile from './components/Profile';
import Project from './components/Project/Project';
import Activity from './components/Activity/Activity';
import { PrivateRoute } from './components/Authorization/PrivateRoute';
import Login from './components/Authorization/Login';
import Register from './components/Authorization/Register';
import Ranking from './components/Ranking/Ranking';
import RankingPage from './components/Ranking/RankingPage';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/project" component={Project} />
      <PrivateRoute exact path="/new_project" component={Project} />
      <PrivateRoute exact path="/activity" component={Activity} />
      <PrivateRoute exact path="/new_activity" component={Activity}/>
      <PrivateRoute exact path="/ranking" component={RankingPage}/>
      </div>
    );
  }
}
// #5918b6
export default App;
