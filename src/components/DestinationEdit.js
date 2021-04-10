import React from 'react'
import {connect} from 'react-redux'
import {editDestination} from '../actions/editDestination'
import Button from '../styledComponents.js/Button'



class DestinationEdit extends React.Component {

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
      let destination = {...this.state, id: this.props.destination.id}
       this.props.editDestination(destination)    
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
                <input type="text" placeholder="Lake Name" value={this.state.name} name="name" onChange={this.handleChange}></input>
                <label>City: </label>   
                <input type="text" placeholder="City: "value={this.state.city} name="city" onChange={this.handleChange}></input>
                <label>State: </label>   
                <input type="text" placeholder="State: "value={this.state.state} name="state" onChange={this.handleChange}></input>
                <label>Description: </label>   
                <textarea type="text" placeholder="Description: "value={this.state.description} name="description" onChange={this.handleChange}>
                </textarea>
                <Button type="submit">Submit</Button>
                </form>
            </div>
        )
    }
}

export default connect(null, {editDestination})(DestinationEdit)