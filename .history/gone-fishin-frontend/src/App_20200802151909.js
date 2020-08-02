import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {fetchDestinations} from './actions/fetchDestinations'

  


class App extends React.Component {

componentDidMount() {

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

  // mapStateToProps = (state) => {
  //   return {
  //     destinations: state.destinations
  //   }
  // }


    export default connect()(App)


