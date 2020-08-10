import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = (props) => {

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
export default Navbar