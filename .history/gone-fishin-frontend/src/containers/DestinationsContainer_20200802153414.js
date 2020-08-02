// a container should render other components and pass them data if needed 
// they are typically class components 

import React from 'react'
import DestinationsInput from '../components/DestinationsInput'
import DestinationsList from  '../components/DestinationsList'

class DestinationsContainer extends React.Component {

    render(){
    return (
        <div>
            DestinationsContainer
            <DestinationsInput />
            <DestinationsList />

        </div>


    )
    }
}

export default DestinationsContainer
