import React from 'react'
import {connect} from 'react-redux'
import {deleteFeature} from '../actions/deleteFeature'
//import Button from '../components/Button'

const Button = styled.button`
background-color: $(props => {props.primary ? "#4caf50" : "#008CBA")};
border: none;
color: white;
padding: 15px, 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
`;





const FeaturesList = (props) => {

    


   const handleDelete = (feature) => {
       props.deleteFeature(feature.id, feature.destination_id)

   }

    return (
        <div>
           {props.features && props.features.map(feature =>
            <li key={feature.id}>{feature.name}<br></br><Button primary onClick={() => handleDelete(feature)}>Delete</Button>
            </li>
            )} 
        </div>
    )
}

export default connect(null, {deleteFeature}) (FeaturesList)