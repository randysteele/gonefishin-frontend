// a container should render other components and pass them data if needed 
// they are typically class components 

import React from 'react'
import DestinationsInput from '../components/DestinationsInput'
import DestinationsList from  '../components/DestinationsList'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'


class DestinationsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchDestinations()
    }

    render(){
    return (
        <div>
            
            <DestinationsInput />
            <DestinationsList destination={this.props.destinations}/>

        </div>


    )
    }
}

const mapStateToProps= state => {
    return {
        destination: state.destinations
    } 
}

export default connect(mapStateToProps, {fetchDestinations}) (DestinationsContainer);
