import React, { Component } from 'react';
import '../../styles/rows.css'

class Rows extends Component {
    showPop = () => {
        this.props.showPop()
    }   
    render() { 
        let data = this.props.data
        
        return (  
            <div>

            <div className="row" onClick={this.showPop}>
            <div className="row-item">{data.name.split(" ")[0]}</div>
            <div className="row-item">{data.name.split(" ")[1]}</div>
            <div className="row-item email">{data.email}</div>
            <div className="row-item">{data.firstContact.split("T")[0]}</div>
            <div className="row-item">{data.emailType}</div>
            <div className="row-item">{data.sold? "V": "X"}</div>
            <div className="row-item">{data.owner}</div>
            <div className="row-item">{data.country}</div>
            </div>
            
            </div>
        )
    }
}
 
export default Rows;