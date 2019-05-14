import React, {Component } from 'react';
import { identifier } from '@babel/types';

class DateBadge extends Component {

    findDates = () => {
        let dates = this.props.data.data.map(d=> d.firstContact.split("-")[1])
        let date =((new Date()).getMonth() + 1).toString()
        let myDate = 0+ date
        let times = 0
        for(let d of dates){
            if(d == myDate){
                times++
            }
        }
        return times
    }
    render() { 
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return ( 
            <div className="dateBadge">
            <i className="fas fa-chart-line"></i>
            <div>{this.findDates()}</div>
            <div>new {months[new Date().getMonth()]} customers</div>
            </div>
         )
    }
}
 
export default DateBadge;