import React from 'react'
import FeaturesContainer from '../containers/FeaturesContainer'
import DestinationEdit from '../components/DestinationEdit'
import CommentsContainer from '../containers/CommentsContainer'
import H2 from '../styledComponents.js/H2'




const DestinationShow = (props) => {

   // let destination = props.destinations[props.match.params.id - 1]
    let destination = props.destinations.filter(destination => destination.id == props.match.params.id)[0]
  
    

        return (    
            <div>    
            <h3>                
                 {destination ? destination.name : null} - {destination ? destination.city : null} -  {destination ? destination.state : null} <br></br><br></br>-  {destination ? destination.description : null} 

            </h3>
            <h3>Edit your Destination below</h3><DestinationEdit  destination={destination} />
            <H2>Lake Features:</H2> <FeaturesContainer destination={destination}/>
            <H2>Comments:</H2> <CommentsContainer destination={destination} />
            </div>
        )
}


export default DestinationShow

//    {/* {destination ? null : <Redirect to='/destinations'/>} */}
