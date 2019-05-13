import React, {Component } from 'react';

class DateBadge extends Component {
    render() { 
        let firstContact = this.props.data.data.map(d=> d.firstContact.split("T")[0])
        return ( 
            <div>Datebadge</div>
         )
    }
}
 
export default DateBadge;