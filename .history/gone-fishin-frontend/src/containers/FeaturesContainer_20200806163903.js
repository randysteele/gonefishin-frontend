import React from 'react'
import FeaturesInput from '../components/FeaturesInput'
import FeaturesList from '../components/FeaturesList'


class FeaturesContainer extends React.Component {
    


    render(){
        return (
            <div>
                <FeaturesInput destinations={this.props.destinations}/><br></br>
                <FeaturesList features={props.destination && this.props.destination.features}/>
            </div>
        )
    }
}
export default FeaturesContainer