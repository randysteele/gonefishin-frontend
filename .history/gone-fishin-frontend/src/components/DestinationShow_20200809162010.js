import React from 'react'
import FeaturesContainer from '../containers/FeaturesContainer'
import  DestinationEdit from '../components/DestinationEdit'
import CommentsContainer from '../containers/CommentsContainer'
import Headers from '../components/Headers'




const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]
  
    

        return (    
            <div>    
            <h2>                
                 {destination ? destination.name : null} - {destination ? destination.city : null} -  {destination ? destination.state : null} -  {destination ? destination.description : null} 

            </h2>
            <H2>Edit Destination!</H2><DestinationEdit  destination={destination}/>
            <H4>Lake Features!</H4> <FeaturesContainer destination={destination}/>
            <H4>Comments:</H4> <CommentsContainer destination={destination} />
            </div>
        )
}


export default DestinationShow

//    {/* {destination ? null : <Redirect to='/destinations'/>} */}
