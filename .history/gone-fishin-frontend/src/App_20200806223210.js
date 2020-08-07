import React from 'react';
import './App.css';
// import {connect} from 'react-redux'
import DestinationsContainer from './containers/DestinationsContainer'
// import DestinationsInput from './components/DestinationsInput';
// import DestinationsList from './components/DestinationsList';
//import {fetchDestinations} from './actions/fetchDestinations'
  


class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/destinations/3/features')
    .then(response => response.json())
    .then(data => console.log(data))
  }


  render(){
    return(
      <div className="App" >
        <h1>Gone Fishin'</h1>
      <DestinationsContainer />
      
      
        
      </div>
    )
  }
}

export default App


