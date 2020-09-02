import React from 'react';
import './App.css';
import DestinationsContainer from './containers/DestinationsContainer'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import ClickMe from './components/ClickMe'


const Title = styled.h1`
color: blue;
font-size: 100px;
`



class App extends React.Component {

  render(){
    return(
      
      <div className="App">
        <Navbar />
        <Title>Gone Fishin'</Title>

      <DestinationsContainer />  
      </div>
      
    )
  }
}

export default App


