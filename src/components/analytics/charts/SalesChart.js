import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import '../../../styles/analytics/analytics.css'

class DateSalesChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }

  manageCountries = (clients) => {
    // // TODO: Seperate function
    const data = clients.map(d => ({ country: d.country, sold: d.sold }))

    let countries = [
      { country: "Turkey", count: 0 },
      { country: "Croatia", count: 0 },
      { country: "Greece", count: 0 },
      { country: "Romania", count: 0 },
      { country: "France", count: 0 }
    ]

    for (let d of data) {
      if (d.sold) {
        for (let c of countries) {
          if (d.country === c.country) {
            c.count++
          }
        }
      }
    }

    this.setState({ data: countries })
    }

  componentDidMount = async () => {
    await this.manageCountries( this.props.data )
  }

  render() {
    return (

      <BarChart width={500} height={300} data={this.state.data} barSize={50}>
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />

      </BarChart>
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