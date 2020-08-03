import React from 'react'
// import DestinationsContainer from '../containers/DestinationsList'



const DestinationsList = (props) => {
   // console.log(props)
    
    return (
        <div>
            {props.destinations.map(dest => <li key={dest.id}> {dest.name} <br></br> - {dest.city} <br></br> - {dest.state} <br></br> - {dest.description}</li>)}
        </div>
    )
}

export default DestinationsList