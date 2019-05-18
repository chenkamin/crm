import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import '../../../styles/analytics/analytics.css'

class DateSalesChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      salesBy:""
    }
  }

  manageCountries = (clients, param) => {
    // // TODO: Seperate function
    console.log(param)
    let data = clients.map(d => ({ [param]: d[param], sold: d.sold }))
    console.log(data)
    let mySet = new Set()
    let countriesSet = data.map(d => mySet.add(d[param]))

    let countriesArr = Array.from(mySet)
    console.log(countriesArr)

    let countries = countriesArr.map(c => ({ country: c, count: 0 }))
    console.log(countries)


    for (let d of data) {
      if (d.sold) {
        for (let c of countries) {
          if (d[param] === c.country) {
            c.count++
          }
        }
      }
    }

    this.setState({ data: countries })
  }

  componentDidMount = async () => {
    console.log(this.state.salesBy)
    await this.manageCountries(this.props.data, "country")
  }
  handleInput = (e) => {
    const target = e.target
    const value =target.value;
    const name = target.name;
    this.setState({ salesBy: value})
  }
  render() {
    return (
      <div>
        <span>Sales By </span>
        <select className="select-input" name="emailUpdate" onChange={this.handleInput}  >
                    <option>Country</option>
                    <option>emailType</option>
                    <option>owner</option>
                   
                </select>
        <BarChart width={500} height={300} data={this.state.data} barSize={50}>
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />

        </BarChart>
      </div>
    );
  }
}

export default DateSalesChart;








// export default class Example extends Component {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';


// this.state = {
//     data : [{name: 'Page A', uv: 4000, amt: 2400,},{name: 'Page B', uv: 3000, amt: 2210,},{name: 'Page C', uv: 2000, amt: 2290,},
//     { name: 'Page D', uv: 2780, amt: 2000,
//     },
//     {name: 'Page E', uv: 1890, amt: 2181,
//     },
//     {name: 'Page F', uv: 2390, amt: 2500,
//     },
//     {name: 'Page G', uv: 3490, amt: 2100,
//     },
//   ]