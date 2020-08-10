import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = (props) => {

    return (
        <div className ="Navbar">
            <Link  to='/destinations' style={{paddingRight: '10px'}}>Destinations</Link>
            <Link  to='/destinations/new'>Add Destination!</Link>
        </div>
    )
}
export default Navbar