import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {fetchDestinations} from './actions/fetchDestinations'

  


class App extends React.Component {

componentDidMount() {
  this.props.fetchDestinations({type: 'FETCH_DESTINATIONS', payload: {name: 'Island Fishing Lakes'}})

  }

  render(){
    return(
      <div className="App" >
        <h1>Gone Fishin'</h1>

        
      </div>
    )
  }




  }

  // mapStateToProps = (state) => {
  //   return {
  //     destinations: state.destinations
  //   }
  // }


    export default connect(null, {fetchDestinations})(App)


