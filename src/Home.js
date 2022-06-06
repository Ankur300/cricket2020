import React from 'react';
import cricket from './cricket1.jpg'
import Navbar from './Navbar';

function Home({location})
{
      console.log(location.state.name)
    var abc=location.state.name;

    
return <>
<Navbar/>
<div class='container'>
      
 <h1>Hello {abc}</h1>     
<img src={cricket} height='400' width='1115' ></img>

<div style={{backgroundColor:'silver'}}>
 <h2> MEET OUR TEAM</h2>

<p>We are all very different. We were born in different cities,
 at different times, we love different music, food, movies.
 But we have something that unites us all. It is our company. 
 We are its heart. We are not just a team, we are a family.</p>
      </div>


</div>
</>

}
export default Home;