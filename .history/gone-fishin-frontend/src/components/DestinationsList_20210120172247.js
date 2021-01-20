import React from 'react'
import {Link} from 'react-router-dom'



const DestinationsList = (props) => {
    
    return (
       <div>
       <h2> Fishing Lake List:</h2> {props.destinations.sort().map(dest => <h5><div key={dest.id}>Lake Name:<Link to={`/destinations/${dest.id}`}><br></br>{dest.name}</Link>  <br></br> City: {dest.city} <br></br> State: {dest.state} <br></br> Description: {dest.description}</div></h5>)} 
   </div>
   
 
    )
}

export default DestinationsList