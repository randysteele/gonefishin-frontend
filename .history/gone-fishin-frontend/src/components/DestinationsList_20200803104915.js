import React from 'react'
// import DestinationsContainer from '../containers/DestinationsList'



const DestinationsList = ({destination}) => {
    console.log(destination)
    
    return (
        <div>
            {props.data.destinations.map(dest => <li key={dest.id}>{dest.name} - {dest.city} - {dest.state} - {dest.description}</li>)}
        </div>
    )
}



export default DestinationsList