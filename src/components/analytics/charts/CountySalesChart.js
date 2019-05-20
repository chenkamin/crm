import React, {Component } from 'react';
import '../../../styles/analytics/analytics.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Line,LineChart } from 'recharts';

class CountrySalesChart extends Component {
    


    render() { 
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let dates = this.props.data.map(d=> ({firstContact:new Date (d.firstContact), sold: d.sold}) )
        let today = new Date(); //"now"
        let subsDate = dates.map(m=> ({days:Math.round(Math.abs(today - m.firstContact)/1000/60/60/24), date: m.firstContact,sold:m.sold}))
        console.log(subsDate)
        let data = subsDate.filter(s=> s.days <365 && s.sold === true)

        console.log(data)
        // .map(d=>({dateMonth: new Date(d.date).getMonth()}))
        // dateDay:new Date(d.date).getDay()
        let sortedArr =data.sort((a,b) => b.dateMonth- a.dateMonth).slice(0,10)
        console.log(sortedArr)

        
        return (  
            <div>
   
            </div>
        )
    }
}
 
export default CountrySalesChart;