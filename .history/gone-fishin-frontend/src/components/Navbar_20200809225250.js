import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {

    return (
        <div>
            <navbar href='#/destinations' style={{paddingRight: '10px'}}>Destinations/</navbar>
            <Link to='/destinations/new'>Add Destination!</Link>
        </div>
    )
}
export default Navbar