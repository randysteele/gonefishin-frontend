import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = (props) => {

    return (
        <div className ="Navbar">
            <Link  to='/destinations' style={{paddingRight: '10px'}}>All Destinations</Link>
            <Link  to='/destinations/new'>Add A Destination Here</Link>
        </div>
    )
}
export default Navbar