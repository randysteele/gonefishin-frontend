import React from 'react'
import {NavLink} from 'react-router-dom'
import App from '../App'

const Navbar = (props) => {

    return (
        <div>
            <NavLink to='/destinations' style={{paddingRight: '10px'}}>Destinations</NavLink>
            <NavLink to='/destinations/new'>Add Destination!</NavLink>
        </div>
    )
}
export default Navbar