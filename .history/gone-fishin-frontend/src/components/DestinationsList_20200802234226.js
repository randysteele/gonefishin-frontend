import React from 'react'

const DestinationsList = (props) => {
    return (
        <div>
            {props.destinations.map(dest => <li key={destinations.id}>{dest.name} - {dest.city} - {dest.state} - {dest.description}</li>)}
        </div>
    )
}



export default DestinationsList