import React from 'react'
// import DestinationsContainer from '../containers/DestinationsList'



const Destinations = (props) => {
  //  console.log(destinations)
    
    return (
        <div>
            {props.destinations.map(dest => <li key={dest.id}> - {dest.name} - {dest.city} - {dest.state} - {dest.description}</li>)}
        </div>
    )
}

export default DestinationsList