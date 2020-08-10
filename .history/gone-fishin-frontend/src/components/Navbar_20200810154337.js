import React from 'react'
// import {Link} from 'react-router-dom'
// import {BrowserRouter,Route,Switch, NavLink} from 'react-router-dom';
import DestinationsList from  '../components/DestinationsList';
import DestinationsInput from '../components/DestinationsInput';
import DestinationShow from  '../components/DestinationShow';


const NavBar = (props) => {

    return (
        <div className ="NavBar">
           <NavBar />
           <Switch>
           <Link   exact activeClassName="active" path='/destinations/new'  component={DestinationsInput}></Link>     
           <Link   exact activeClassName="active" path='/destinations/:id'  render={(routerProps) => <DestinationShow {...routerProps} destinations={this.props.destinations}/>}/>  
           <Link   exact activeClassName="active" path='/destinations' render={(routerProps) => <DestinationsList {...routerProps} destinations={this.props.destinations}/>}/>
           </Switch> 
        </div>
    )
}
export default NavBar