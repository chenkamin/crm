import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Table from './components/clients/Table';
import Crud from './components/crud/Crud';
import Analytics from './components/analytics/Analytics';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={

    }
  }
  render() { 
    return (
      <Router>
        <div className="nav-bar">
      <Link to="/Table"><div className="head">Clients</div></Link>
      <Link to="/Crud"><div className="head">Actions</div></Link>
      <Link to="/Analytics"><div className="head">Analytics</div></Link>
      </div>
      <Route path="/Table" exact render={() => <Table   />} />
      <Route path="/Crud" exact render={() => <Crud   />} />
      <Route path="/Analytics" exact render={() => <Analytics  />} />




      </Router>
      )
  }
}
 

export default App;
