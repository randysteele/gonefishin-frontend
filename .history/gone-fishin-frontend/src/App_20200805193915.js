import React from 'react';
import './App.css';
// import {connect} from 'react-redux'
import DestinationsContainer from './containers/DestinationsContainer'
import FeaturesContainer from './containers/FeaturesContainer';
// import DestinationsInput from './components/DestinationsInput';
// import DestinationsList from './components/DestinationsList';
//import {fetchDestinations} from './actions/fetchDestinations'
  


class App extends React.Component {


  render(){
    return(
      <div className="App" >
        <h1>Gone Fishin'</h1>
      <DestinationsContainer />
      <FeaturesContainer />
      
      
        
      </div>
    )
  }
}

export default (App)


