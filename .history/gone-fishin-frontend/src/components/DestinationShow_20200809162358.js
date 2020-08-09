import React from 'react'
import FeaturesContainer from '../containers/FeaturesContainer'
import DestinationEdit from '../components/DestinationEdit'
import CommentsContainer from '../containers/CommentsContainer'




const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]
  
    

        return (    
            <div>    
            <h2>                
                 {destination ? destination.name : null} - {destination ? destination.city : null} -  {destination ? destination.state : null} -  {destination ? destination.description : null} 

            </h2>
            <Headers>Edit Destination!</Headers><DestinationEdit  destination={destination}/>
            <h4>Lake Features!</h4> <FeaturesContainer destination={destination}/>
            <h4>Comments:</h4> <CommentsContainer destination={destination} />
            </div>
        )
}


export default DestinationShow

//    {/* {destination ? null : <Redirect to='/destinations'/>} */}
