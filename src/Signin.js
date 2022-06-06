import React from 'react';
import Navbar from './Navbar';


class Signin extends React.Component{
    constructor(props){
    super(props)
    }
    render(){ return(
        <>
        <Navbar/>
     <h1 style={{color:'red',textAlign:'center',border:'5px solid black'}}>Contact us</h1>
<p style={{color:'blue',textAlign:'center',border:'5px'}}>Reach out 58976019 for any queries </p>
        </>
    )
    }
}


export default Signin;