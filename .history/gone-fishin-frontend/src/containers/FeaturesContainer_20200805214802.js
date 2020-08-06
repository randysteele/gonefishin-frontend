import React from 'react'
import FeaturesInput from '../components/FeaturesInput'
import FeaturesList from '../components/FeaturesList'


class FeaturesContainer extends React.Component {

    render(){
        return (
            <div>
                <FeaturesInput/>
                 <FeaturesList feature={this.props.destinations && this.props.destinations.features}/>
            </div>
        )
    }
}

export default FeaturesContainer