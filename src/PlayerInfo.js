import React from 'react';
import { func } from 'prop-types';
import { useHistory } from 'react-router';

function Playerinfo({})
{
 const history=useHistory();
 const callcontact=()=>{
history.push("/contact")
 }   
return <div>

<h1 style={{color:'Blue',border:'5px solid black',textAlign:'center'}}>Press info button for player details</h1>
<button type="button" className="btn btn-success btn-lg btn-block mx-4" onClick={callcontact}    >Info</button>


</div>


}
export default Playerinfo;