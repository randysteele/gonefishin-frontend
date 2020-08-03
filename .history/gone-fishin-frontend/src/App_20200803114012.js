import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import DestinationsContainer from './containers/DestinationsContainer'
// import DestinationsInput from './components/DestinationsInput';
// import DestinationsList from './components/DestinationsList';
//import {fetchDestinations} from './actions/fetchDestinations'
  


class App extends React.Component {


  render(){
    return(
      <div className="App" >
        <h1>Gone Fishin'</h1>
      <DestinationsContainer />
      
      
        
      </div>
    )
  }
}

export default connect()(App)


