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
          backgroundImage:`url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2FMMMCWD%2Fa-beautiful-autumn-scene-at-a-tranquil-fishing-pond-in-ohio-the-pond-features-a-rustic-shelter-house-located-in-the-ww-knight-nature-preserve-MMMCWD.jpg&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fa-beautiful-autumn-scene-at-a-tranquil-fishing-pond-in-ohio-the-pond-features-a-rustic-shelter-house-located-in-the-ww-knight-nature-preserve-image184845961.html&tbnid=7QUJiSxzl-1eEM&vet=12ahUKEwi6tIPqy5DrAhUNNK0KHcltDNwQMygsegUIARCfAg..i&docid=C0yjqn0iHHvIvM&w=1300&h=955&q=beautiful%20fishing%20images&ved=2ahUKEwi6tIPqy5DrAhUNNK0KHcltDNwQMygsegUIARCfAg")`,backgroundRepeat: "no-repeat", backgroundSize: 'cover'
         }}>
      
      <Title>Gone Fishin'</Title>
      <DestinationsContainer />        
      </div>
      </ThemeProvider>
    )
  }
}

export default App


