import React from 'react'
import {connect} from 'react-redux'
import {addFeature} from '../actions/addFeature'
import Button from '../components/Button'


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
                    <mark>Feature Name:</mark>
                    <input type="text" name="name" value ={this.state.name} onChange={this.handleChange}/>
                    <Button type="submit">Submit</Button>

                </form>


            </div>
        )
    }
}

export default connect(null, {addFeature}) (FeaturesInput)