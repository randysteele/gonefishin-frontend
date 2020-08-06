import React from 'react'


const FeaturesList = (props) => {
   // debugger
    console.log(props.feature)


    return (
        <div>
           {props.features && props.features.map(feature =>
            <li key={feature.id}>{feature.name}{feature.destination_id}
            </li>
            )} 
        </div>
    )
}

export default FeaturesList