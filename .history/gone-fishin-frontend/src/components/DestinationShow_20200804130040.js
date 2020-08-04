import React from 'react'


const DestinationShow = (props) => {

        return (
            <div>
             Lake Name: {props.destinations.name} City: {props.destinations.city} State: {props.destinations.state} Description: {props.destinations.description}   

            </div>
        )

}


export default DestinationShow