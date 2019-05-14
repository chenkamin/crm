import React, {Component } from 'react';

class EmailsBadge extends Component {
    render() { 
        let NumberOfMails = this.props.data.data.map(d=> d.emailType).filter(f=> f !== null).length
        

        return ( 
            <div className="EmailBadge">
                <i className="far fa-envelope"></i>
                <div>{NumberOfMails}</div>
                <div>Emails - sent</div>
            </div>
         )
    }
}
 
export default EmailsBadge;