import React, { Component } from 'react';
import '../../../styles/analytics/analytics.css'
import { XAxis, YAxis, Tooltip, Legend, Line, LineChart } from 'recharts';

class CountrySalesChart extends Component {

    getFormmatedDate = date => {
        date = new Date(date);
        let month = date.toLocaleString('en-us', { month: 'long' })
        let day = date.getDay()
        return `${day}-${month}`;
    };

    render() {
        let dates = this.props.data.map(d => ({ firstContact: new Date(d.firstContact), sold: d.sold }))
        let subsDate = dates.map(m => ({ days: Math.round(Math.abs(new Date() - m.firstContact) / 1000 / 60 / 60 / 24), date: m.firstContact, sold: m.sold }))
            .filter(s => s.days < 395 && s.days > 365 && s.sold === true)
        let obj = {}
        let arr = []
        subsDate.forEach(d => obj[d.date] ? obj[d.date]++ : obj[d.date] = 1)
        Object.keys(obj).forEach(d => arr.push({ date: this.getFormmatedDate(d), sales: obj[d] * 3 }))




        return (
            <div>
                <div className="chart-header">This Month Sales</div>
                <LineChart width={730} height={250} data={arr}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="red" />
                </LineChart>
            </div>
        )
    }
}

export default CountrySalesChart;