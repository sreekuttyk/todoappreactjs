import React, { Component } from "react";
import "./TodoApp.css";

export class TodoApp extends Component {
    state = {
        input:"",
        items:[]
    };
    handlechange = (event) => {
        this.setState({
            input:event.target.value
        });
        console.log(this.state.input)
    };
    storeitems = event =>{
        event.preventDefault();
        const {input}=this.state;
        
        this.setState({
            items:[...this.state.items,input],
            input:""
        });
    };
    deleteitem=(key)=>{
        const allitems=this.state.items;
        allitems.splice(key,1);
        this.setState({
            items:allitems
        });
    }
  render() {
      const{input,items}=this.state;
      console.log(items)
    return (
      <div className="todocontainer">
        
        <form className="inputsection" onSubmit={this.storeitems}>
        <h1>Todo App</h1>
          <input type="text" value={input} onChange={this.handlechange} placeholder="Enter Items..."/>
          
        </form>
        <ul>
          {items.map((data,index)=>(
              <li key={index}>{data}<i class="fas fa-trash-alt" onClick={()=>this.deleteitem(index)}></i></li>
          ))}
          
        </ul>
      </div>
    ); 
  }
}
export default TodoApp;
