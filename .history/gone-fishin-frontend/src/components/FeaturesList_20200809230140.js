import React from 'react'
import {connect} from 'react-redux'
import {deleteFeature} from '../actions/deleteFeature'
import Button from '../components/Button'




const FeaturesList = (props) => {



   const handleDelete = (feature) => {
       props.deleteFeature(feature.id, feature.destination_id)

   }

    return (
        <mark>
           {props.features && props.features.map(feature =>
            <li key={feature.id}>{feature.name}<br></br><Button onClick={() => handleDelete(feature)}>Delete</Button>
            </li>
            )} 
        </mark>
    )
}

export default connect(null, {deleteFeature}) (FeaturesList)