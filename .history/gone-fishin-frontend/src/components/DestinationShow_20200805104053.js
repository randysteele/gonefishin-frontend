import React from 'react'


const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]
  
    

        return (
            <li>
                Lake Name:{destination ? destination.name : null}  - City:{destination ? destination.city : null} - State:{destination ? destination.state : null} - Description:{destination ? destination.description : null}
            </li>
        )
}


export default DestinationShow

//            Lake Name: {destination.name} City: {destination.city} State: {destination.state} Description: {destination.description}
