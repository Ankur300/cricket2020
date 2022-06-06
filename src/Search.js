import React from 'react';
import { render } from 'react-dom';
import { withRouter } from 'react-router';
import AddDetails from './AddDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './AllPlayer.css';
import Navbar from './Navbar';
import Login from './Login';
import Playerinfo from './PlayerInfo';
class Search extends React.Component {

    
    state={
        users:[],
        name:"",
    
    };  

    
    handlechange=(event)=>{
        this.setState({name:event.target.value});
        console.log(this.state.name);
        console.log("hi");
    };
   
    handleSubmit=(e)=>{ 
            fetch(`http://localhost:3000/users/?name=${this.state.name}`,{
                method:"GET",
            })
            .then((res)=>res.json())
            .then((res)=>
            this.setState({users:res})
            ); 
            console.log(this.state.users); 
           
    
        }

        
    
    /* calluserlist=()=>{
        this.props.history.push('/home')
                } */
    render() {
 
        return (
            <div>
                <Navbar/>
<form>
         <label for="name">Search Player</label>
            <input type="text" id="name" name="name" className='form-control' onChange={this.handlechange}></input><br></br>     
        <button class="btn btn-outline-success" type="submit" onClick={this.handleSubmit}>Search</button>
        </form>
        <table className= "table table-striped table-bordered my-4 mx-4 " border="3" 
          >
              <thead>
                    <tr> 
                        <th scope="col" >ID</th>
                    <th scope="col">name</th>
                    <th scope="col">Matches</th>
                    <th scope="col">Runs</th>
                    <th scope="col">Wickets</th></tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((user) => (
                        <tr key={user.id}>
                            <td >{user.id}</td>
                            <td>{user.name}</td>
                            <td >{user.matches}</td>
                            <td >{user.runs}</td>
                            <td >{user.wicket}</td>

                        </tr>


                    ))}
                    </tbody>
                </table>
         {/*    //    <button type= "button" onClick={this.calluserlist}> userlist </button> */}
            

            </div>
        );
    }
}

export default  Search;

