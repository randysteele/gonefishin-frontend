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
      <div className="App"
        style={{
          backgroundImage:`url("https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwivvJyyv4_rAhX0knIEHXx8AuMQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.wideopenspaces.com%2F30-greatest-fishing-photos-ever-taken-pics%2F&psig=AOvVaw05KPkWYVdl0XpUkAjtBTug&ust=1597109692655902")`,backgroundRepeat: "no-repeat"
        }}>
      
      <Title>Gone Fishin'</Title>
      <DestinationsContainer />        
      </div>
      </ThemeProvider>
    )
  }
}

export default App


