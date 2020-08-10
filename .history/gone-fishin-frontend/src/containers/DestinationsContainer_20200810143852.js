import React from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationsList from  '../components/DestinationsList'
import DestinationsInput from '../components/DestinationsInput'
import DestinationShow from  '../components/DestinationShow'
import {Route, Switch} from 'react-router-dom'





class DestinationsContainer extends React.Component {


    componentDidMount(){
      this.props.fetchDestinations()
    }

    render(){        
      return (
        <div>  
          
          <Switch>
         <Route  path='/destinations/new' component={DestinationsInput}/>     
         <Route  path='/destinations/:id'  render={(routerProps) => <DestinationShow {...routerProps} destinations={this.props.destinations}/>}/>   
         <Route  exact path='/destinations' render={(routerProps) => <DestinationsList {...routerProps} destinations={this.props.destinations}/>}/>
         </Switch><br></br>
         
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
