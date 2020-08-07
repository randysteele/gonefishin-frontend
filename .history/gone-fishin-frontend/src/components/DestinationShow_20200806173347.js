import React from 'react'
//import {Redirect} from 'react-router-dom'

import FeaturesContainer from '../containers/FeaturesContainer'



const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]
  
    

        return (    
            <div>    
            <h2>                
                 {destination ? destination.name : null} - {destination ? destination.city : null} -  {destination ? destination.state : null} -  {destination ? destination.description : null} 

            </h2>
            <FeaturesContainer destination={feature}/>
            </div>
        )
}


export default DestinationShow

//    {/* {destination ? null : <Redirect to='/destinations'/>} */}
