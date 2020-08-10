import React from 'react'
// import DestinationsContainer from '../containers/DestinationsContainer'
// import DestinationShow from './DestinationShow'
import {Route, Link} from 'react-router-dom'



const DestinationsList = (props) => {
    
    return (
       <div>
        <h3>Fishing Lake List:</h3>{props.destinations.map(dest => <h5><div key={dest.id}>Lake Name:<Link to={`/destinations/${dest.id}`}><br></br>{dest.name}</Link>  <br></br> City: {dest.city} <br></br> State: {dest.state} <br></br> Description: {dest.description}</div></h5>)} 
   </div>
   
 
    )
}

export default DestinationsList