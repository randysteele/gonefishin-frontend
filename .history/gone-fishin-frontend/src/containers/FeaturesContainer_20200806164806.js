import React from 'react'
import FeaturesInput from '../components/FeaturesInput'
import FeaturesList from '../components/FeaturesList'
import {connect} from 'react-redux'
import {addFeature} from '../actions/addFeature'



class FeaturesContainer extends React.Component {
    


    render(){
        return (
            <div>
                <FeaturesInput destinations={this.props.destination}/><br></br>
                <FeaturesList features={this.props.destination && this.props.destination.features}/>
            </div>
        )
    }
}
export default connect(null, {addFeature}) (FeaturesContainer)