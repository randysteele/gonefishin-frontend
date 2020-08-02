import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {fetchDestinations} from './actions/fetchDestinations'

  


class App extends React.Component {

  componentDidMount() {
this.props.fetchDestinations

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


