import React from 'react'


const FeaturesList = (props) => {

    return (
        <div>
           {props.destination.features && props.destination.features.map(feature =>
            <li key={feature.id}>{feature.name}{feature.destination_id}
            </li>
            )} 
        </div>
    )
}

export default FeaturesList