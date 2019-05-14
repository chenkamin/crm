import React, { Component } from 'react';
import '../../styles/table/popup.css'

class Popup extends Component {

    showPop = () => {
        this.props.showPop()
    }
    
    render() { 
        return ( <div className={this.props.class? "pop-on row":"pop-of row"} >
        <i className="fas fa-times" onClick={this.showPop}></i>
        <div className="pop-inputs">
        <div id="name">
            <div className="pop-item">Name:</div>
            <div className="pop-item">Surename:</div>
            <div className="pop-item">Country:</div>
            </div>
            <div id="surname">
            <input className="pop-input top"/>
            <input className="pop-input"/>
            <input className="pop-input"/>
            </div>
           
            </div>
    <div id="update">
    <div id="update-item">Update</div>
    </div>

        </div> )
    }
}
 
export default Popup;