import React from 'react'
// import DestinationsContainer from '../containers/DestinationsList'
import DestinationShow from './DestinationShow'



const DestinationsList = (props) => {
    
    return (
        <div>
  <h3>Fishing Lake List: </h3>{props.destinations.map(dest => <h5><li  key={dest.id}> Lake Name:{dest.name} <br></br> City: {dest.city} <br></br> State: {dest.state} <br></br> Description: {dest.description}</li></h5>)}        </div>
    )
}

export default DestinationsList

{/* //       Lake Name:{dest.name} <br></br> City: {dest.city} <br></br> State: {dest.state} <br></br> Description: {dest.description}</li></h5>)} */}
