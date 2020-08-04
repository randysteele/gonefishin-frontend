import React from 'react'
// import DestinationsContainer from '../containers/DestinationsList'
import DestinationShow from './DestinationShow'



const DestinationsList = (props) => {
    
    return (
        <div>
       <h3>Fishing Lake List: </h3>{props.destinations.map(dest => <li  key={dest.id}><DestinationShow destinations={dest}/></li>)} 
        </div>
    )
}

export default DestinationsList

{/* //       Lake Name:{dest.name} <br></br> City: {dest.city} <br></br> State: {dest.state} <br></br> Description: {dest.description}</li></h5>)} */}
