// a container should render other components and pass them data if needed 
// they are typically class components 

import React from 'react'
import DestinationsInput from '../components/DestinationsInput'
import DestinationsList from  '../components/DestinationsList'
import {connect} from 'react-redux'


class DestinationsContainer extends React.Component {

    render(){
    return (
        <div>
            
            <DestinationsInput />
            <DestinationsList />

        </div>


    )
    }
}

export default connect() (DestinationsContainer);
