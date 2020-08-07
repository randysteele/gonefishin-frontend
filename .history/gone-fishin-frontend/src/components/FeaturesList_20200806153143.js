import React from 'react'


const FeaturesList = (props) => {
    console.log(props)
    //debugger

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