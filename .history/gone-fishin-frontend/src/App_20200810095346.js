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
          backgroundImage:`url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.gettyimages.com%2Fphotos%2Fbarfleur-a-beautiful-fishing-village-on-the-normandy-coast-picture-id585096970%3Fs%3D612x612&imgrefurl=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fcherbourg&tbnid=KRCFO3DwFg3L1M&vet=12ahUKEwi6tIPqy5DrAhUNNK0KHcltDNwQMygyegQIARA3..i&docid=UqIcXtCg5AR7WM&w=612&h=459&q=beautiful%20fishing%20images&ved=2ahUKEwi6tIPqy5DrAhUNNK0KHcltDNwQMygyegQIARA3")`,backgroundRepeat: "no-repeat", backgroundSize: 'cover'
         }}>
      
      <Title>Gone Fishin'</Title>
      <DestinationsContainer />        
      </div>
      </ThemeProvider>
    )
  }
}

export default App


