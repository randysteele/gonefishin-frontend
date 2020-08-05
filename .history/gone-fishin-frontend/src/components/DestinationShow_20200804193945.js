import React from 'react'


const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]

        return (
            <div>
            Lake Name: {destination.name} City: {destination.city} State: {destination.state} Description: {destination.description}

            </div>
        )

}


export default DestinationShow