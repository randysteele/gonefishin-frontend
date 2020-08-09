import React from 'react';
import './App.css';
import DestinationsContainer from './containers/DestinationsContainer'
import styled from 'styled-components'
//import Button from './components/Button'

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
      <DestinationsContainer />        
      </div>
    )
  }
}

export default App


