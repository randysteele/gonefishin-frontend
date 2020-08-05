// a container should render other components and pass them data if needed 
// they are typically class components 
import React from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationsList from  '../components/DestinationsList'
import DestinationsInput from '../components/DestinationsInput'
import DestinationShow from  '../components/DestinationShow'

import {Route} from 'react-router-dom'



class DestinationsContainer extends React.Component {


    componentDidMount(){
      this.props.fetchDestinations()
    }

    render(){        
      return (
        <div>     
         <Route path='/destinations/new' component={DestinationsInput}/>     
         <Route exact path='/destinations' render={() => <DestinationsList destinations={this.props.destinations}/>}/>
         <Route path='/destinations/:id'  render={() => <DestinationsList destinations={this.props.destinations}/>}/>
        </div>
      )
          
       }
    }
const mapStateToProps = state => {
    return {
        destinations: state.destinations
    } 
}
export default connect(mapStateToProps, {fetchDestinations})(DestinationsContainer);
