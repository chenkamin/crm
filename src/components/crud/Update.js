import React, { Component } from 'react';

class Update extends Component {

  
   
    FindIdAndUpdateClient = () => {
        if(this.props.state.clientUpdate == ""){
            alert("insert A Client")
            return
        }
        let client = this.props.data.find(d=> d.name == this.props.state.clientUpdate)
        this.props.updateClient(client.id)
    }
   
    makeOwnersSet = () => {
        let ownersSet = new Set()
        this.props.data.map(d=> ownersSet.add(d.owner))
        let ownersArr = Array.from(ownersSet)
       return ownersArr
    }

    render() { 
        let data =this.props.data

      

        return (
            <div>
                <h3>Update</h3>
                <p>Client: </p>
                <input list="clients" name="clientUpdate" onChange={this.props.handleInput} />
                <datalist id="clients">
                {data.map(d=> <option value={d.name}/>)}
                </datalist>


                <p>Transfer Ownership to: </p>
                <select id="select-input" name="ownerUpdate"  onChange={this.props.handleInput} >
                         <option>owner</option>
                            {this.makeOwnersSet().map(d=> <option >{d}</option>)}
                </select>
                <button onClick={this.FindIdAndUpdateClient} >Transfer</button>
                <p>Send Email: </p>
                <select id="select-input" name="emailUpdate"  onChange={this.props.handleInput}>
                         <option></option>
                                <option>null</option>
                                <option>A</option> 
                                 <option>B</option>
                                <option>C</option>
                                <option>D</option>
                </select>
                <button onClick={this.FindIdAndUpdateClient} >Send</button>

                <p>Declare Sale! </p>
                <button onClick={this.FindIdAndUpdateClient}>Declare</button>

            </div>
        )
    }
}
 
export default Update;