import React from 'react'


const FeaturesList = (props) => {
   // debugger
    console.log(props.features)


    return (
        <div>
           {props.feature && props.feature.map(feature =>
            <li key={feature.id}>{feature.name}{feature.destination_id}
            </li>
            )} 
        </div>
    )
}

export default FeaturesList