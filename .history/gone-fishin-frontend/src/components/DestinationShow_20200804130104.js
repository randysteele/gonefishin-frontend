import React from 'react'


const DestinationShow = (props) => {

        return (
            <div>
            <li> Lake Name: {props.destinations.name} City: {props.destinations.city} State: {props.destinations.state} Description: {props.destinations.description}</li>   

            </div>
        )

}


export default DestinationShow