import React from 'react';
import './App.css';
import DestinationsContainer from './containers/DestinationsContainer'
import styled from 'styled-components'
//import Button from './components/Button'
import DestinationsList from  '../components/DestinationsList'
import DestinationsInput from '../components/DestinationsInput'
import DestinationShow from  '../components/DestinationShow'
import {Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'


const Title = styled.h1`
color: blue;
font-size: 100px;
`


class App extends React.Component {

  render(){
    return(        
      <div className="App"
        style={{
          backgroundImage:`url("https://images.unsplash.com/photo-1582657118090-af35eefc4e48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")`,backgroundRepeat: "no-repeat", backgroundSize: 'cover'
         }}>
      
      <Title>Gone Fishin'</Title>
      <DestinationsContainer />    


                <NavBar/>
          <Switch>
         <Route  path='/destinations/new' component={DestinationsInput}/>     
         <Route  path='/destinations/:id'  render={(routerProps) => <DestinationShow {...routerProps} destinations={this.props.destinations}/>}/>   
         <Route  path='/destinations' render={(routerProps) => <DestinationsList {...routerProps} destinations={this.props.destinations}/>}/>
         </Switch><br></br>
         
    
      </div>
    )
  }
}

export default App
