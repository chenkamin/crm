import React, { Component } from 'react';
import EmployeesChart from './EmployeesChart';
import CountySalesChart from './CountySalesChart';
import DateSalesChart from './DateSalesChart';
import ClientsChart from './ClientsChart';

class Charts extends Component {
    render() {
        return (
            <div>
                <EmployeesChart />
                <CountySalesChart />
                <DateSalesChart data={this.props.data} />
                <ClientsChart />
            </div>
        )
    }
}

export default Charts;