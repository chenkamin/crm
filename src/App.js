import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Table from './components/clients/Table';
import Crud from './components/crud/Crud';
import Analytics from './components/Analytics';


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
      <Link to="/Table">Table</Link>
      <Link to="/Crud">Crud</Link>
      <Link to="/Analytics">Analytics</Link>

      <Route path="/Table" exact render={() => <Table   />} />
      <Route path="/Crud" exact render={() => <Crud   />} />
      <Route path="/Analytics" exact render={() => <Analytics  />} />




      </Router>
      )
  }
}
 

export default App;
