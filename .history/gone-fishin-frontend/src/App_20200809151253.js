import React from 'react';
import './App.css';
import DestinationsContainer from './containers/DestinationsContainer'
import styled from 'styled-components'
//import Button from './components/Button'

const Title = styled.h1`
color: blue;
font-size: 100px;
`
const Button = styled.button`
 font-family: sans:serif;
 font-size: 1.3rem;
 border: none;
 border-radius: 5px;
 padding: 7px 10px;
 background: red;
 color: '#fff';
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


