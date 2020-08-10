import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {

    return (
        <div>
            <Navbar to='/destinations' style={{paddingRight: '10px'}}>Destinations</Navbar>
            <Link to='/destinations/new'>Add Destination!</Link>
        </div>
    )
}
export default Navbar