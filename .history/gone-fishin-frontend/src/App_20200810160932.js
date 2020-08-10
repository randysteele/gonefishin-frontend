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

  render(){
    return(        
      <div className="App"
        style={{
          backgroundImage:`url("https://images.unsplash.com/photo-1582657118090-af35eefc4e48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")`,backgroundRepeat: "no-repeat", backgroundSize: 'all'
         }}>
      
      <Title>Gone Fishin'</Title>
      <DestinationsContainer />        
      </div>
    )
  }
}

export default App
