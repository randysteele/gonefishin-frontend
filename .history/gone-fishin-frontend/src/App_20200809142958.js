import React from 'react';
import './App.css';
// import {connect} from 'react-redux'
import DestinationsContainer from './containers/DestinationsContainer'
import styled from 'styled-components'
// import DestinationsInput from './components/DestinationsInput';
// import DestinationsList from './components/DestinationsList';
//import {fetchDestinations} from './actions/fetchDestinations'
import Button from './styledComponents'

const Title = styled.h1`
color: blue;
font-size: 100px;
`
  


class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/destinations/')
    .then(response => response.json())
    .then(data => console.log(data))
  }


  render(){
    return(
      <div className="App" >
        <Title>Gone Fishin'</Title>
        <Button primary>Primary</Button>
        <Button>Regular</Button>
      <DestinationsContainer />        
      </div>
    )
  }
}

export default App


