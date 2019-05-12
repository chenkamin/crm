import React, { Component } from 'react';
import '../../styles/popup.css'

class Popup extends Component {

    showPop = () => {
        this.props.showPop()
    }
    
    render() { 
        return ( <div className={this.props.class? "pop-on row":"pop-of row"} ></div> )
    }
}
 
export default Popup;