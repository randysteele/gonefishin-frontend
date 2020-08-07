import React from 'react'
import {connect} from 'react-redux'
import addFeature from '../actions/addFeature'


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
        addFeature(this.state, this.props.destination.id)    
        // this.setState({
        //  name: ''
        }
    

    render() {
        return (
            <div>
                <form>
                    <label>Feature Name:</label>
                    <input type="text" name="name" value ={this.state.name} onChange={this.handleChange}/>
                    <input type="submit"/>

                </form>


            </div>
        )
    }
}

export default connect(null, {addFeature}) (FeaturesInput)