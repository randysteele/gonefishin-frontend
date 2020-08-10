import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = (props) => {

    return (
        <div className ="Navbar">
            <NavLink activeClassName="active" to='/destinations' style={{paddingRight: '10px'}}>Destinations</NavLink>
            <NavLink activeClassName="active" to='/destinations/new'>Add Destination!</NavLink>
        </div>
    )
}
export default Navbar