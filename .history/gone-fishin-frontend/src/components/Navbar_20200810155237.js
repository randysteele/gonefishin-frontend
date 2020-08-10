import React from 'react'
import {BrowserRouter,Route,Switch, Link} from 'react-router-dom';
import DestinationsList from  '../components/DestinationsList';
import DestinationsInput from '../components/DestinationsInput';
import DestinationShow from  '../components/DestinationShow';


const NavBar = (props) => {

    return (
        <div className ="NavBar">
           <NavBar />
           <Switch>
           <Link    path='/destinations/new'  component={DestinationsInput}></Link>     
           <Link    path='/destinations/:id'  render={(routerProps) => <DestinationShow {...routerProps} destinations={this.props.destinations}/>}/>  
           <Link    path='/destinations' render={(routerProps) => <DestinationsList {...routerProps} destinations={this.props.destinations}/>}/>
           </Switch> 
        </div>
    )
}
export default NavBar