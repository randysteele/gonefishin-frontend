import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../styledComponents.js/Button'
import {deleteDestination} from '../actions/deleteDestination'
import {connect} from 'react-redux'



const DestinationsList = (props) => {

    const handleDelete = (destination) => {
        props.deleteDestination(destination.id) 
        debugger
    }

    // const handleDelete = (feature) => {
    //     props.deleteFeature(feature.id, feature.destination_id)
 
    // }
 
 
    
    
    return (
       <div>
       <h2> Fishing Lake List:</h2> {props.destinations.reverse().map(dest => <h5><div key={dest.id}>
           Lake Name:<Link to={`/destinations/${dest.id}`}><br></br>{dest.name}</Link><br></br> 
           City: {dest.city} <br></br> State: {dest.state} <br></br>
           Description: {dest.description} </div></h5>)} 
       
   </div>
   
 
    )
}

export default connect(null, {deleteDestination}) (DestinationsList)