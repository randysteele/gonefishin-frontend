// a container should render other components and pass them data if needed 
// they are typically class components 
import React from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationsList from  '../components/DestinationsList'
import DestinationsInput from '../components/DestinationsInput'
import DestinationShow from  '../components/DestinationShow'

import {Route, Switch} from 'react-router-dom'
import Featurescontainer from '../containers/FeaturesContainer'



class DestinationsContainer extends React.Component {


    componentDidMount(){
      this.props.fetchDestinations()
    }

    render(){        
      return (
        <div>  
          <Switch>
         <Route path='/destinations/new' component={DestinationsInput}/>     
         <Route path='/destinations/:id'  render={(routerProps) => <DestinationShow {...routerProps} destinations={this.props.destinations}/>}/>   
         <Route path='/destinations' render={(routerProps) => <DestinationsList {...routerProps} destinations={this.props.destinations}/>}/>
         </Switch>
         <Featurescontainer />
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
