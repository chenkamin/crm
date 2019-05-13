import React, {Component } from 'react';
import  DateBadge  from './DateBadge';
import  EmailsBadge  from './EmailsBadge';
import  OutstandingBadge  from './OutstandingBadge';

class Badges extends Component {
    
    render() { 
        return ( 
            <div>
            <DateBadge data={this.props.data}/>
            <EmailsBadge data={this.props.data}/>
            <OutstandingBadge data={this.props.data} />
            </div>
            )
    }
}
 
export default Badges;