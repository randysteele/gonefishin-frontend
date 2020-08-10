import React from 'react';
import './App.css';
import DestinationsContainer from './containers/DestinationsContainer';
import styled, {ThemeProvider} from 'styled-components';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import DestinationsList from  './components/DestinationsList';
import DestinationsInput from './components/DestinationsInput';
import DestinationShow from  './components/DestinationShow';


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
      <div className="App"
      style={{
        backgroundImage:`url("https://images.unsplash.com/photo-1582657118090-af35eefc4e48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")`,backgroundRepeat: "no-repeat", backgroundSize: 'cover'
       }}></div>


      <Navbar>
      <Switch>
     <Route  path='/destinations/new' component={DestinationsInput}/>     
     <Route  path='/destinations/:id'  render={(routerProps) => <DestinationShow {...routerProps} destinations={this.props.destinations}/>}/>   
     <Route  exact path='/destinations' render={(routerProps) => <DestinationsList {...routerProps} destinations={this.props.destinations}/>}/>
     </Switch></Navbar>

      
     
      <DestinationsContainer />          
    
    )
  }
}


export default App;


