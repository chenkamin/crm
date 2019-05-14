import React, { Component } from 'react';
import EmployeesChart from './EmployeesChart';
import CountySalesChart from './CountySalesChart';
import SalesChart from './SalesChart';
import ClientsChart from './ClientsChart';

class Charts extends Component {
    render() {
        return (
            <div>
                <EmployeesChart data={this.props.data}/>
                <CountySalesChart />
                <SalesChart data={this.props.data} />
                <ClientsChart />
            </div>
        )
    }
}

export default Charts;