import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from './Contactus';
import Registration
 from './Registration';
import AllPlayer from './AllPlayer';
import Login from './Login';
import Home from './Home';
import Pagenotfound from './Pagenotfound';
import Playerinfo from './PlayerInfo';
import AddDetails from './AddDetails';
import Userlist from './userlist';
import ModifyPlayer from './ModifyPlayer';
import Search from './Search';
import DeletePlayer from './DeletePlayer';
import Product from './product';








 const routing=(
  <Router>
<div>





{/* <h1>Welcome to routing</h1>
<li><Link to ="/">Home</Link></li>
<li><Link to ="/contact">Contact us </Link></li>
<li><Link to ="/Registration">Registration</Link></li>
<li><Link to ="/allplayer">AllPlayer</Link></li> 
<li><Link to ="/login">Login</Link></li>  */}








<Switch>

<Route exact path="/" component={App}/>
<Route  path="/contact" component={Contactus}/>
<Route  path="/Registration" component={Registration}/>
<Route  path="/allplayer" component={AllPlayer}/>
  <Route  path="/login" component={Login}/>
<Route  path="/home" component={Home}/>
<Route  path="/adddetails" component={AddDetails}/>
<Route  path="/userlist/:id" component={Userlist}/>
<Route  path="/playerinfo" component={Playerinfo}/>
<Route  path="/modify" component={ModifyPlayer}/>
<Route  path="/search" component={Search}/>
<Route  path="/delete" component={DeletePlayer}/>
<Route  path="/product" component={Product}/>
<Route   component={Pagenotfound}/>

</Switch>




</div>


  </Router>
)

ReactDOM.render(
  
    routing,
 
  document.getElementById('root')
);


