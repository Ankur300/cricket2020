import {useState} from 'react';
import React, {Component} from 'react'
import Home from './Home';
import { useHistory } from 'react-router';


import Navbar from './Navbar';

class Login extends React.Component {
  state={
    showComponent:false,
    name:""
};
handleChangeName=(event)=>{
    this.setState({name:event.target.value});

}
handleSubmit=(e)=>{
  e.preventDefault();
  this.setState({showComponent:true})

  this.props.history.push({
    pathname:'/home',
  state:{name:this.state.name}})
 

}
render(){
return( 
<div>
    <Navbar/>
<form className="container" className="col-4" >
          <h1>Login</h1>
          <div style={{textAlign:'center',border:'2px solid black'}}>
          <label>
            Name:
            </label>
            <input type="text" id ='name'name='name' onChange={this.handleChangeName} className="form-control col-4" />
          
          <label>
            Password:
            </label>
            <input type="password" name='Password' className="form-control" />
          
          <button className="btn btn-success my-3" type="submit" onClick={this.handleSubmit}>Login</button>
         
</div>
        </form>


</div>
)
}

}
export default Login;
