import React from 'react'
import {connect} from 'react-redux'
import {addFeature} from '../actions/addFeature'
import Button from '../styledComponents.js/Button'


class FeaturesInput extends React.Component {

    state = {
        name: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value            
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addFeature(this.state, this.props.destinations.id)    
        this.setState({
         name: ''
        })
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Feature Name:</label>
                    <input type="text" name="name" value ={this.state.name} onChange={this.handleChange}/>
                    <Button type="submit">Submit</Button>

                </form>


            </div>
        )
    }
}

export default connect(null, {addFeature}) (FeaturesInput)