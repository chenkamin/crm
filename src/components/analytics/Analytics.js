import React, {Component } from 'react';
import axios from 'axios';
import  Badges  from './Badges';

class Analytics extends Component {
constructor(){
    super()
    this.state ={
        data: []
    }
}
getData = async () =>  {
    let data = await axios.get("http://localhost:8080/clients")
    return data
 }
 componentDidMount = async () =>{
    let data = await this.getData()
    this.setState({ data: data.data })
  }
    render() { 
        return (
        <div>
            <Badges data={this.state} />
        </div>
          )
    }
}
 
export default Analytics;