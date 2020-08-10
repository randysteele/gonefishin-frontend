import React from 'react';
import './App.css';
import DestinationsContainer from './containers/DestinationsContainer'
import styled, {ThemeProvider} from 'styled-components'
//import Button from './components/Button'

const Title = styled.h1`
color: blue;
font-size: 100px;
`

const theme =  {
  primary:'teal',
  secondary: 'green',
  font: 'sans-serif',
  background: 'blue'
};


class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/destinations/')
    .then(response => response.json())
    .then(data => console.log(data))
  }



  render(){
    return(
      <ThemeProvider theme={theme}>
        <navbar> "Hello"
      <div className="App"
      
        style={{
          backgroundImage:`url("https://cdn0.wideopenspaces.com/wp-content/uploads/2015/01/beautiful-fishing.jpg")`,backgroundRepeat: "no-repeat", backgroundSize: 'cover'
         }}>
      
      <Title>Gone Fishin'</Title>
      <DestinationsContainer />        
      </div>
      </navbar>
      </ThemeProvider>
      
    )
  }
}

export default App


