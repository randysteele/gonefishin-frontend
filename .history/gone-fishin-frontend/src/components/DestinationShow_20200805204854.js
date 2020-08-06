import React from 'react'
//import {Redirect} from 'react-router-dom'

import FeaturesContainer from '../containers/FeaturesContainer'



const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]
  
    

        return (
           <div>
                
            <li>                
                 {destination ? destination.name : null} -   {destination ? destination.city : null} -  {destination ? destination.state : null} -  {destination ? destination.description : null} 
            </li>
           <FeaturesContainer>

           </FeaturesContainer>

           </div>
           
               
            
            
            
        )
}


export default DestinationShow

//    {/* {destination ? null : <Redirect to='/destinations'/>} */}
