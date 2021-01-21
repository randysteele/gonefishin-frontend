import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'




const DestinationsList = (props) => {

    const handleDeleteDestination = (destination) => {
        props.deleteDestination(destination.id) 
    }

    
    
    return (
       <div>
       <h2> Fishing Lake List:</h2> {props.destinations.reverse().map(dest => <h5><div key={dest.id}>Lake Name:<Link to={`/destinations/${dest.id}`}><br></br>{dest.name}</Link>  <br></br> City: {dest.city} <br></br> State: {dest.state} <br></br> Description: {dest.description}        <button type="button" onClick={() => handleDeleteDestination(destinations)}>Delete</button>
</div></h5>)} 
   </div>
   
 
    )
}

export default (DestinationsList)