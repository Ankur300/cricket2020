import React from 'react';
import { render } from 'react-dom';
import { withRouter } from 'react-router';
import AddDetails from './AddDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './AllPlayer.css';
import Navbar from './Navbar';
import Login from './Login';
class AllPlayer extends React.Component {


    constructor(props) {
        super(props)
        this.state = { users: [], }

    }
    componentDidMount() {
        fetch(`http://localhost:8020/alluser/`,{
            method:"GET",
        })
        .then((res)=>res.json())
        .then((res)=>
        this.setState({users:res})
        ); 
        console.log(this.state.users); 
       

    }
    calluserlist=()=>{
        this.props.history.push('/home')
                }
    render() {
 
        return (
            <div>
                <Navbar/>
                <div class="container  style={{textAlign:'center',border:'2px solid black'}}">
                    <h1>All Players</h1>
          <table className= "table table-dark table-bordered table-hover" border="3" 
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
                        <tr key={user._id}>
                            <td >{user._id}</td>
                            <td>{user.name}</td>
                            <td >{user.city}</td>
                            <td >{user.age}</td>
                            <td >{user.sports}</td>

                        </tr>


                    ))}
                    </tbody>
                </table>
                </div>
         {/*    //    <button type= "button" onClick={this.calluserlist}> userlist </button> */}
            

            </div>
        );
    }
}
export default  withRouter(AllPlayer);

