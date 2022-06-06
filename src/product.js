import axios from 'axios';
import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import Navbar from './Navbar';
 
export default class Product extends React.Component{
state={
    id:0,
    Price:"",
    ProductName:"",
    
};
handleChangeProductName=(event)=>{
    this.setState({ProductName:event.target.value});
};
handleChangePrice=(event)=>{
    this.setState({Price:event.target.value});
};

handleSubmit=(e)=>{
    console.log("submit clicked")
    e.preventDefault();
    const user=JSON.stringify({ProductName:this.state.ProductName,Price: this.state.Price});
    fetch(`http://localhost:8082/users`,{
        method:"POST",
        mode:"cors",
        body:JSON.stringify(user),

    }).then((data)=>{
        console.log(data);
    });
    console.log("after api request")
    console.log(this.state.Price);
}
render(){
    return(
        <>
        <Navbar/>
        <form className='container col-md-6' style={{textAlign:'center',border:'2px solid black'}}>
        <label for="Product Name">Product Name: </label>
            <input type="text" id="ProductName" name="ProductName" className='form-control' onChange={this.handleChangeProductName}></input><br></br>
            <label for="Price">Price </label>
            <input type="text" id="Price" name="Price" className='form-control' onChange={this.handleChangePrice}></input><br></br>
            <button className="btn btn-dark" onClick={this.handleSubmit}>Submit</button>
        </form>
        </>
    )
}
}

