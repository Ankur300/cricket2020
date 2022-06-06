import axios from 'axios';
import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import Navbar from './Navbar';
 
export default class Registration extends React.Component{
state={
    id:0,
    password:"",
    Name:"",
    EmailId:"",
    showComponent:false
};
handleChangeName=(event)=>{
    this.setState({Name:event.target.value});
};
handleChangeEmail=(event)=>{
    this.setState({EmailId:event.target.value});
};
handleSlot=(event)=>{
    this.setState({slot:event.target.value});
};
handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({showComponent:true})
    const user=JSON.stringify({EmailId:this.state.EmailId,Name: this.state.Name,Sports:this.state.Sports});
    const headers={
        'Acess-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
    }
    axios.post("http://localhost:3010/registration",user,{headers:headers})
    .then((res)=>{
        console.log(res);
        console.log(res.data);
    });
}
render(){
    return(
        <>
        <Navbar/>
        <form className='container col-md-6' style={{textAlign:'center',border:'2px solid black'}}>
        <label for="Name">Name: </label>
            <input type="text" id="Name" name="Name" className='form-control' onChange={this.handleChangeName}></input><br></br>
            <label for="password">Password </label>
            <input type="password" id="psswrd" className='form-control'></input><br></br>
             <label for="EmailId">Email Id: </label>
            <input type="text" id="EmailId" name="EmailId" className='form-control' onChange={this.handleChangeEmail}></input><br></br>
            <label for="Phone">Phone</label>
            <input type="text" id="phone" name="phone" className='form-control' onChange={this.handleSlot}></input><br></br>
            <button className="btn btn-dark" onClick={this.handleSubmit}>Registration</button>
            {this.state.showComponent ?
            alert('Registration successful'):
           null
}
        </form>
        </>
    )
}
}




/* db.Registration.insertMany([{"Name":"Ankur","Password":"1234","EmailId":"abc@gmail","PhoneNo":"989769"},
    {"Name":"Ankit","Password":"2234","EmailId":"abc9@gmail","PhoneNo":"75989769"},
    {"Name":"Atul","Password":"3234","EmailId":"abc7@gmail","PhoneNo":"9869769"},
   {"Name":"Amit","Password":"4234","EmailId":"abc45@gmail","PhoneNo":"94989769"},
   {"Name":"Anil","Password":"7234","EmailId":"abc12@gmail","PhoneNo":"8989769"}])
 */