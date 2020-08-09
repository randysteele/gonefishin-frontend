import React from 'react'
import {connect} from 'react-redux'
import {deleteFeature} from '../actions/deleteFeature'
import App from '../App'




const FeaturesList = (props) => {

    let Button = styled.button`
 font-family: sans:serif;
 font-size: 1.3rem;
 border: none;
 border-radius: 5px;
 padding: 7px 10px;
 background: red;
 color: '#fff';
 &:hover{
   background: blue;
 }
`



   const handleDelete = (feature) => {
       props.deleteFeature(feature.id, feature.destination_id)

   }

    return (
        <div>
           {props.features && props.features.map(feature =>
            <li key={feature.id}>{feature.name}<br></br><Button onClick={() => handleDelete(feature)}>Delete</Button>
            </li>
            )} 
        </div>
    )
}

export default connect(null, {deleteFeature}) (FeaturesList)