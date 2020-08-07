import React from 'react'


const FeaturesList = (props) => {
    console.log(props.features[0])

    return (
        <div>
           {props.features && props.features.map(feature =>
            <li key={feature.id}>{feature.name}
            </li>
            )} 
        </div>
    )
}

export default FeaturesList