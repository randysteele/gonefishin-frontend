import React from 'react'
// import DestinationsContainer from '../containers/DestinationsList'
//import DestinationShow from './DestinationShow'
import {Link} from 'react-router-dom'




const DestinationsList = (props) => {
    
    return (
        <li>
  <h3>Fishing Lake List: </h3>{props.destinations.map(dest => <h5><li  key={dest.id}>Lake Name:<Link to={`/destinations/${dest.id}`}>{dest.name}</Link>  <br></br> City: {dest.city} <br></br> State: {dest.state} <br></br> Description: {dest.description}</li></h5>)} 
   </li>
    )
}

export default DestinationsList