import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import '../../../styles/analytics/analytics.css'


class EmployeesChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }
  manageOwners = () => {
    let ownersUse = this.props.data.filter(d => d.sold).map(d=> d.owner)
    let ownersSet = new Set()
    let owners = this.props.data.filter(d => d.sold).map(d=> ownersSet.add(d.owner))
    let ownersArr = Array.from(ownersSet)
    let ownerObj = ownersArr.map(o => ({owner: o, count: 0}))
    for(let owner of ownersUse){
      for(let o of ownerObj){
        if(o.owner === owner){
          o.count++
        }
      }
    }
    this.setState({ data: ownerObj })
  }

  MakeDataForCharts = () => {
    let sortedArr =this.state.data.sort((a,b) => b.count- a.count).slice(0,3)
    console.log(sortedArr)
    return sortedArr
}


  componentDidMount = async () => {
    await this.manageOwners()
  }

  render() {
    return (
      <BarChart width={500} height={300}  data={this.MakeDataForCharts()} barSize={25} layout={"vertical"}>
      <XAxis type="number" />     
      <YAxis  dataKey="owner" type="category" width={100}/>
      <Tooltip />
      <Bar dataKey="count" fill="#a0520e" />

    </BarChart>
    )
  }
}

export default EmployeesChart;