import React, { Component } from 'react';
import '../../styles/table/rows.css'

class Rows extends Component {
    showPop = () => {
        this.props.showPop()
    }   
    render() { 
        let data = this.props.data
        
        return (  
            <div className="rows-header">

            <div className="row" onClick={this.showPop}>
            <div className="row-item">{data.name.split(" ")[0]}</div>
            <div className="row-item">{data.name.split(" ")[1]}</div>
            <div className="row-item">{data.firstContac}</div>
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