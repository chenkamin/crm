import React, { Component } from 'react';
import '../../styles/table/inputs.css'

class Inputs extends Component {
    render() { 
        return ( 
            <div className="inputs">
                <input id="input"type="text" name="search" placeholder="Search" 
                 onChange={this.props.handleInput} />
                 <select id="select-input" name="dropDown"  onChange={this.props.handleInput}>
                         <option>name</option>
                            <option>email</option>
                                <option>owner</option>
                </select>
            </div>
         )
    }
}
 
export default Inputs;