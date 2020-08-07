import React from 'react'


const FeaturesList = (props) => {
    console.log(props)
    //debugger

    return (
        <div>
           {this.props.features && this.props.features.map(feature =>
            <li key={feature.id}>{feature.name}{feature.destination_id}
            </li>
            )} 
        </div>
    )
}

export default FeaturesList