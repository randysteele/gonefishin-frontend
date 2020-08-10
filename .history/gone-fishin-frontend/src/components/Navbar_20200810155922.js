
import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

    return (
        <div>
            <Link to='/destinations' style={{paddingRight: '10px'}}>Destinations</Link>
            <Link to='/destinations/new' style={{paddingRight: '10px'}}>Add Destination!</Link>
        </div>
    )
}
export default NavBar