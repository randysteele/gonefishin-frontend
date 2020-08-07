import React from 'react'


const FeaturesList = (props) => {
   // console.log(props.features)

   const handleDelete = (event) => {
       
   }

    return (
        <div>
           {props.features && props.features.map(feature =>
            <li key={feature.id}>{feature.name}<br></br><button onClick={handleDelete}>Delete</button>
            </li>
            )} 
        </div>
    )
}

export default FeaturesList