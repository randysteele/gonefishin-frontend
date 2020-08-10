import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {

    return (
        <div>
            <Link to='/destinations' style={{paddingRight: '10px'}}>Destinations</Link>
            <Link to='/destinations/new' style={{paddingRight: '10px'}}>Add Destination!</Link>
            <Link to='/destinations/:id'  render={(routerProps) => <DestinationShow {...routerProps} destinations={this.props.destinations}/>}/>   

            
        </div>
    )
}
export default Navbar