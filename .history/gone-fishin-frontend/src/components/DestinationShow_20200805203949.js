import React from 'react'
//import {Redirect} from 'react-router-dom'

import FeaturesContainer from '../containers/FeaturesContainer'



const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]
  
    

        return (
            <div>
                
            <h4>                
                 {destination ? destination.name : null} <br></br><br></br>   {destination ? destination.city : null} <br></br><br></br>  {destination ? destination.state : null} <br></br><br></br>  {destination ? destination.description : null} <br></br>
            </h4>
           
            </div>
           
               
            
            
            
        )
}


export default DestinationShow

//    {/* {destination ? null : <Redirect to='/destinations'/>} */}
