import React from 'react'
import FeaturesContainer from '../containers/FeaturesContainer'
import DestinationEdit from './DestinationEdit'
import CommentsContainer from '../containers/CommentsContainer'




const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]
  
    

        return (    
            <div>    
            <h3>                
              {destination ? destination.name : null} - {destination ? destination.city : null} -  {destination ? destination.state : null} <br></br><br></br>-  {destination ? destination.description : null} 

            </h3>
            <h3>Edit your Destination below</h3><DestinationEdit  destination={destination} />
            <h2>Lake Features:</h2> <FeaturesContainer destination={destination}/>
            <h2>Comments:</h2> <CommentsContainer destination={destination} />
            </div>
        )
}


export default DestinationShow