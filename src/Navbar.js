import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from './Contactus';
import Registration
 from './Registration';
import AllPlayer from './AllPlayer';
import cricket from './cricket1.jpg'



class Navbar extends React.Component
{
    constructor(props) {
        super(props);
        }
    
  




 
    
        render() {
           
return ( 
  
    <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
      <img src={cricket} height='40' width='40' ></img>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="/" href="/home">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/allplayer">AllPlayers</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/delete">Delete Player</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="/" href="/adddetails">Add Details</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="/" href="/modify">Modify</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="/" href="/search">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/registration">Registration</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>






    </>

)
}
}


export default Navbar;