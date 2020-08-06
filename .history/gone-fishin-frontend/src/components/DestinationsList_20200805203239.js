import React from 'react'
// import DestinationsContainer from '../containers/DestinationsContainer'
// import DestinationShow from './DestinationShow'
import {Route, Link} from 'react-router-dom'
import FeaturesContainer from '../containers/FeaturesContainer'



const DestinationsList = (props) => {
    
    return (
        <div>
        <li>
  <h3>Fishing Lake List: </h3>{props.destinations.map(dest => <h5><li  key={dest.id}>Lake Name:<Link to={`/destinations/${dest.id}`}>{dest.name}</Link>  <br></br> City: {dest.city} <br></br> State: {dest.state} <br></br> Description: {dest.description}</li></h5>)} 
   </li>
   <FeaturesContainer />
   </div>
    )
}

export default DestinationsList