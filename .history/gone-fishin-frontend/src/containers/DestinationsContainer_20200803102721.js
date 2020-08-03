// a container should render other components and pass them data if needed 
// they are typically class components 
import React from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationsList from  '../components/DestinationsList'
import DestinationsInput from '../components/DestinationsInput'



class DestinationsContainer extends React.Component {


    componentDidMount(){
        this.props.fetchDestinations()
    }

    render(){
        
    return (
        <div>            
            <DestinationsInput />
            <DestinationsList destination={this.props.destination}/>
        </div>
    )
    }
}
const mapStateToProps = state => {
    return {
        destination: state.destination
    } 
}
export default connect(mapStateToProps, {fetchDestinations})(DestinationsContainer);
