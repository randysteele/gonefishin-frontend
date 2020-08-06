import React from 'react'
//import {Redirect} from 'react-router-dom'

import FeaturesContainer from '../containers/FeaturesContainer'



const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]
  
    

        return (
            
            <h4>                
                Lake Name: {destination ? destination.name : null} <br></br><br></br>  City: {destination ? destination.city : null} <br></br><br></br> State: {destination ? destination.state : null} <br></br><br></br> Description: {destination ? destination.description : null} <br></br>
            </h4>
            <div>
                <FeaturesContainer />
            </div>
            
            
        )
}


export default DestinationShow

//    {/* {destination ? null : <Redirect to='/destinations'/>} */}
