import { useLocation, useParams } from "react-router-dom";
const Userlist=()=>{
    const params=useParams();
    const location=useLocation();
    console.log(params)
    console.log(location);
    return(
        <>
        <h1> your id is:{params.id}</h1>
        
        </>
    )

}
export default Userlist;