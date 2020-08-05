import React from 'react'


const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]
  
    

        return (
            <li>
                Lake Name: {destination ? destination.name : null} <br></br>  City: {destination ? destination.city : null} <br></br> State: {destination ? destination.state : null} <br></br> Description: {destination ? destination.description : null} <br></br>
            </li>
        )
}


export default DestinationShow

//            Lake Name: {destination.name} City: {destination.city} State: {destination.state} Description: {destination.description}
