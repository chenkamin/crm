import React, { Component } from 'react';
import data from '../../data.json'
import  Rows  from './Rows';
import  TableHeader  from './TableHeader';
import  Inputs  from './Inputs';
import axios from 'axios';
import  PopUp  from './Popup';


class Table extends Component {
    constructor(){
        super()
        this.state ={
            data: [],
            search: "",
            dropDown:"name",
            showPop : false
        }
    }
    getData = async () =>  {
        let data = await axios.get("http://localhost:8080/clients")
        return data
     }
     componentDidMount = async () =>{
        let data = await this.getData()
        console.log(data.data)
        this.setState({ data: data.data })
      }
    handleInput = (e) => {
        const target = e.target
        const value =target.value;
        const name = target.name;
        this.setState({[name] : value})
      }
    showPop =() => {
        console.log("fff")
        const currentState = this.state.showPop;
        this.setState({ showPop: !currentState });
    }

    render() { 
       let data = this.state.data.filter(m=> m[this.state.dropDown].includes(this.state.search)) 

        return (
            <div>
                <Inputs handleInput={this.handleInput} />
                <TableHeader />
                <PopUp class={this.state.showPop} />

               {this.state.search == "" && this.state.dropDown == "" ? 
               this.state.data.map(d=> <Rows data={d} key={d.id} showPop={this.showPop} />):
               data.map(d =><Rows data={d} key={d.id} showPop={this.showPop} />)}
            </div>
          )
    }
}
 
export default Table;