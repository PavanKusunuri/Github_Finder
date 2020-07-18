import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fa fa-github" />
       <div className="container">
        <Users /> 
       </div>
        {/* <UserItem/> */}
      </div>
    );
  }
}

export default App;