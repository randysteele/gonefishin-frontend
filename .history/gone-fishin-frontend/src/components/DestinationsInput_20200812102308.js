import React from 'react'
import {connect} from 'react-redux'
import {addDestination} from '../actions/addDestination'


class DestinationsInput extends React.Component {

    state = {
        name: '', 
        city: '', 
        state: '', 
        description: ''
}

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
       this.props.addDestination(this.state)    
       this.setState({
        name: '', 
        city: '', 
        state: '', 
        description: ''

       })    
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                <label>Lake Name: </label>
                <input type="text" placeholder="Lake Name: " value={this.state.name} name="name" onChange={this.handleChange}></input>
                <label>City: </label>   
                <input type="text" placeholder="City: " value={this.state.city} name="city" onChange={this.handleChange}></input>
                <label>State: </label>   
                <input type="text" placeholder="State: " value={this.state.state} name="state" onChange={this.handleChange}></input>
                <label>Description: </label>   
                <textarea rows="10" cols="50" type="text" placeholder="Description: " value={this.state.description} name="description"  onChange={this.handleChange}>
                </textarea>
                <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addDestination})(DestinationsInput)