import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
export default class ModifyPlayer extends React.Component{
state={
    id:"",
    name:"",
    matches:"",
    runs:"",
    wicket:""

};

handlechange=(event)=>{
    this.setState({id:event.target.value});
};
   handlechange1=(event)=>{
    this.setState({name:event.target.value});
}
    handlechange2=(event)=>{
        this.setState({matches:event.target.value});
    }
        handlechange3=(event)=>{
            this.setState({runs:event.target.value});
        }
            handlechange4=(event)=>{
                this.setState({wicket:event.target.value});
            }
handleSubmit=(e)=>{
    e.preventDefault();
    const user={id:this.state.id,name:this.state.name,matches:this.state.matches,runs:this.state.runs,wicket:this.state.wicket};
    const headers={
        'Acess-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
    }
    axios.put(`http://localhost:3000/users/${this.state.id}`,user)
    .then((res)=>{
        alert('Details modified successfully');
        console.log(res);
        console.log(res.data);
    });
}
render(){
    return(
        <>
        <Navbar/>
        <form className='container col-md-6'>
        <label for="id">ID: </label>
        <input type="text" id="id" name="id" className='form-control' onChange={this.handlechange}></input><br></br>
        <label for="name">Name: </label>
        <input type="text" id="name" name="name" className='form-control' onChange={this.handlechange1}></input><br></br>    
        <label for="matches">Matches: </label>
        <input type="text" id="matches" name="matches" className='form-control' onChange={this.handlechange2}></input><br></br>   
        <label for="runs">Runs: </label>
        <input type="text" id="runs" name="runs" className='form-control' onChange={this.handlechange3}></input><br></br>  
        <label for="wicket">Wickets: </label>
        <input type="text" id="wicket" name="wicket" className='form-control' onChange={this.handlechange4}></input><br></br>
            <button className="btn btn-dark" onClick={this.handleSubmit}>Modify Details</button>
            
           

        </form>
        </>
    )
    
}


}