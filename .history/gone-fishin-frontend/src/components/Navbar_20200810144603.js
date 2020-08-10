import React from 'react'
import {Link} from 'react-router-dom'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import DestinationsList from  './components/DestinationsList';
import DestinationsInput from './components/DestinationsInput';
import DestinationShow from  './components/DestinationShow';


const NavBar = (props) => {

    return (
        <div className ="Navbar">
            <Navbar />
           <Switch>
           <Route   path='/destinations/new'  component={DestinationsInput}/>     
           <Route   path='/destinations/:id'  destinations={this.props.destinations}/>  
           <Route   path='/destinations'      destinations={this.props.destinations}/>
           </Switch> 
        </div>
    )
}
export default NavBar