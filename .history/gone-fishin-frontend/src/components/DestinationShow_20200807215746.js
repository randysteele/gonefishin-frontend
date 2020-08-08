import React from 'react'
//import {Redirect} from 'react-router-dom'

import FeaturesContainer from '../containers/FeaturesContainer'
import  DestinationEdit from '../components/DestinationEdit'



const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]
  
    

        return (    
            <div>    
            <h2>                
                 {destination ? destination.name : null} - {destination ? destination.city : null} -  {destination ? destination.state : null} -  {destination ? destination.description : null} 

            </h2>
            <h4>Edit Destination!</h4><DestinationEdit  destination={destination}/><br></br>


           <h4>Lake Features!</h4> <FeaturesContainer destination={destination}/>
            </div>
        )
}


export default DestinationShow

//    {/* {destination ? null : <Redirect to='/destinations'/>} */}
