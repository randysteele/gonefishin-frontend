import React from 'react'
import {connect} from 'react-redux'


class DestinationsInput extends React.Component {

    state = {
        name: '', 
        city: '', 
        state: '', 
        description: ''
}

    render() {
        return (
            <div>
                <form > 
                <label>Lake Name: </label>
                <input type="text" placeholder="Lake Name" value={this.state.name}></input>
                <label>City: </label>   
                <input type="text" placeholder="City: "value={this.state.city}></input>
                <label>State: </label>   
                <input type="text" placeholder="State: "value={this.state.state}></input>
                <label>Description: </label>   
                <input type="text" placeholder="Description: "value={this.state.description}>
                </input>
                </form>
            </div>


// t.string "name"
// t.string "city"
// t.string "state"
// t.string "description"

        )
    }
}

export default connect()(DestinationsInput)