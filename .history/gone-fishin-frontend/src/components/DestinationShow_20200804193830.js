import React from 'react'


const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]

        return (
            <div>
            Lake Name: {props.destinations.name} City: {props.destinations.city} State: {props.destinations.state} Description: {props.destinations.description}

            </div>
        )

}


export default DestinationShow