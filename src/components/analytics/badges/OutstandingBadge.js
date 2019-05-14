import React, {Component } from 'react';

class OutstandingBadge extends Component {
    render() { 
        let NumberOfOutstanding = this.props.data.data.map(d=> d.sold).filter(f=> f == false).length

        return ( 
            <div className="OutstandingBadge">
                    <i className="fas fa-user"></i>
                <div>{NumberOfOutstanding}</div>
                <div>Outstanding Clients</div>
            </div>  
         )
    }
}
 
export default OutstandingBadge;