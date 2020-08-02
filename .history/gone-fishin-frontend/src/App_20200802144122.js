import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

  


class App extends React.Component {

  componentDidMount() {
  fetch("http://localhost:3000/api/v1/destinations/")
  .then(response => response.json())
  .then(data => console.log(data))
  }

  render(){
    return(
      <div className="App">

        
      </div>
    )
  }




  }

  // mapStateToProps = (state) => {
  //   return {
  //     destinations: state.destinations
  //   }
  // }


    export default connect(null, {fetchDestinations}) (App)


