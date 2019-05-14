import React, {Component } from 'react';
import '../../styles/crud/crud.css'

class Add extends Component {
    makeNewClient = () => {
        this.props.makeNewClient()
    }
    render() { 

        return (  
            <div>
            <h2 id="add-header">Add Client</h2>
            <div className="add-container">
            <div className="add-item first-add">
                <p>First Name:</p>
                <input  name="firstNameAdd" onChange={this.props.handleInput}/>
                </div>

                <div className="add-item last-add">
                <p>Last Name:</p>
                <input name="lastNameAdd" onChange={this.props.handleInput}/>
                </div>

                <div className="add-item country-add">
                <p>Country:</p>
                <input  name="countryAdd" onChange={this.props.handleInput}/>
                </div>

                <div className="add-item owner-add">
                <p>Owner:</p>
                <input  name="ownerAdd" onChange={this.props.handleInput}/>
                </div>

                <div className="add-btn" onClick={this.makeNewClient}><div className="btn-text">Add New Client</div></div>
            </div>
            </div>
        )
    }
}
 
export default Add;