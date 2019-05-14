import React, { Component } from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

class CountryLogic extends Component {
    constructor(){
        super()
        this.state = {
          data : []
        }
    }


    render() { 
        return ( 
          //   <BarChart width={730} height={250} data={this.manageCountries()}>
          //   <CartesianGrid strokeDasharray="3 3" />
          //   <XAxis dataKey="name" />
          //   <YAxis />
          //   <Tooltip />
          //   <Legend />
          //   <Bar dataKey="pv" fill="#8884d8" />
          //   <Bar dataKey="uv" fill="#82ca9d" />
          // </BarChart>
          <div>f</div>
         )
    }
}
 
export default CountryLogic;