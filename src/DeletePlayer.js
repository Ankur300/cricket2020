import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
export default class DeletePlayer extends React.Component{
    state={
        id:0,
        name:"",
    
    };
    handlechange=(event)=>{
        this.setState({id:event.target.value});
    };
    
    handleSubmit=(e)=>{
        e.preventDefault();
        const user={id:this.state.id}
        fetch(`http://localhost:3000/users/${this.state.id}`,{
            method:"DELETE",
            mode:"cors",
            body:JSON.stringify(user),
    
        }).then((data)=>{
            console.log(data);
            alert('player deleted successfully ');
        }).catch(function(){
            console.log("error")
        });
    }
    render(){
        return(
            <div>
                <Navbar/>
            <form onSubmit={this.handleSubmit} >
                <h1 style={{textAlign:'center'}}>Delete Player</h1>
    <div style={{textAlign:'center',border:'2px solid black'}}>
    <label>
        User Id:
        <input type="number" name="id" className='form-control' onChange={this.handlechange}/>
        
        </label>
        <div>
    <button type ="submit" className="btn btn-dark my-3">Delete Player</button>
          </div> 
          </div>
           </form>
            </div>
        )
    }
    
    
    }