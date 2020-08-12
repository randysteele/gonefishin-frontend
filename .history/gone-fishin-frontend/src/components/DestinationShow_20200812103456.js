import React from 'react'
import FeaturesContainer from '../containers/FeaturesContainer'
import DestinationEdit from '../components/DestinationEdit'
import CommentsContainer from '../containers/CommentsContainer'
import H2 from '../styledComponents.js/H2'




const DestinationShow = (props) => {

    let destination = props.destinations[props.match.params.id - 1]
  
    

        return (    
            <div>    
            <h2>                
                 {destination ? destination.name : null} - {destination ? destination.city : null} -  {destination ? destination.state : null} <br></br><br></br>-  {destination ? destination.description : null} 

            </h2>
            <h3>Edit your Destination below</h3><DestinationEdit  destination={destination} />
            <h3>Lake Features:</h3> <FeaturesContainer destination={destination}/>
            <h3>Comments:</h3> <CommentsContainer destination={destination} />
            </div>
        )
}


export default DestinationShow

//    {/* {destination ? null : <Redirect to='/destinations'/>} */}
