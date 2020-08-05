import React from 'react'


const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]

        return (
            <li>
                {destination ? destination.name : null}  - {destination ? destination.city : null} - {destination ? destination.state : null} - {destination ? destination.description : null}
            </li>
        )

}


export default DestinationShow

//            Lake Name: {destination.name} City: {destination.city} State: {destination.state} Description: {destination.description}
