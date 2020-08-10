import React from 'react'
import FeaturesContainer from '../containers/FeaturesContainer'
import DestinationEdit from '../components/DestinationEdit'
import CommentsContainer from '../containers/CommentsContainer'
import H2 from '../components/H2'




const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]
  
    

        return (    
            <div>    
            <h2>                
                 {destination ? destination.name : null} - {destination ? destination.city : null} -  {destination ? destination.state : null} <br></br><br></br>-  {destination ? destination.description : null} 

            </h2>
            <H2>Edit Destination!</H2><DestinationEdit  destination={destination} />
            <h4>Lake Features!</h4> <FeaturesContainer destination={destination}/>
            <h4>Comments:</h4> <CommentsContainer destination={destination} />
            </div>
        )
}


export default DestinationShow

//    {/* {destination ? null : <Redirect to='/destinations'/>} */}