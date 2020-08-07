import React from 'react'
import {connect} from 'react-redux'
import {deleteFeature} from '../actions/deleteFeature'



const FeaturesList = (props) => {
   // console.log(props.features)

   const handleDelete = (feature) => {
       props.deleteFeature(feature.id, feature.destination_id)

   }

    return (
        <div>
           {props.features && props.features.map(feature =>
            <li key={feature.id}>{feature.name}<br></br><button onClick={()=> feature.id}  >Delete</button>
            </li>
            )} 
        </div>
    )
}

export default connect(null, {deleteFeature}) (FeaturesList)