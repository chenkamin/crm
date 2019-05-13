import React, {Component } from 'react';

class Add extends Component {
    makeNewClient = () => {
        this.props.makeNewClient()
    }
    render() { 

        return (  
            <div>
                <h2>Add Client</h2>
                <p>First Name</p>
                <input placeholder="first" name="firstNameAdd" onChange={this.props.handleInput}/>
                <p>Last Name</p>
                <input placeholder="last" name="lastNameAdd" onChange={this.props.handleInput}/>
                <p>Country</p>
                <input placeholder="country" name="countryAdd" onChange={this.props.handleInput}/>
                <p>Owner</p>
                <input placeholder="owner" name="ownerAdd" onChange={this.props.handleInput}/>

                <button onClick={this.makeNewClient}>Add New CLient</button>
            </div>
        )
    }
}
 
export default Add;