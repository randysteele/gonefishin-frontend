import React from 'react'

const DestinationsList = (props) => {
    return (
        <div>
            {props.destination.map(dest => <li>{dest.name} - {dest.city} - {dest.state} - {dest.description}</li>)}
        </div>
    )
}



export default DestinationsList