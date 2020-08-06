import React from 'react'
import FeaturesInput from '../components/FeaturesInput'
import FeaturesList from '../components/FeaturesList'


class FeaturesContainer extends React.Component {
    

    render(){
        return (
            <div>
                <FeaturesInput/>
                 <FeaturesList features={this.props.destinations && this.props.destinations.feature}/>
            </div>
        )
    }
}

export default FeaturesContainer