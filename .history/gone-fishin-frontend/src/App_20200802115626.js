import React from 'react';
import logo from './logo.svg';
import './App.css';

  


class App extends React.Component {

  componentDidMount() {
  fetch("http://localhost:3000/api/v1/destinations/")
  .then(response => response.json())
  .then(data => console.log(data[1]))
  }

  render(){
    return(
      <div className="App">

        
      </div>
    )
  }




  }
    export default App;

