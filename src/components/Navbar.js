import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {

    return (
        <div>
            
            <Link to='/destinations' style={{paddingRight: '10px'}}>Destinations    </Link>
            <Link to='/destinations/new'>Add Destination    </Link>

            
        </div>
    )
}
export default Navbar