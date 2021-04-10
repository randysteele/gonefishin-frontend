import React from 'react'
import { connect } from 'react-redux'
import { addDestination } from '../actions/addDestination'


class DestinationsInput extends React.Component {


    state = {
        name: '',
        city: '',
        state: '',
        description: '',
        image: null
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onImageChange = event => {
        this.setState({ image: event.target.files[0] });
    };

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDestination(this.state, this.props.history)
        // this.setState({
        //     name: '',
        //     city: '',
        //     state: '',
        //     description: '',
        //     image: null,
        const formData = new FormData();
        formData.append('title', this.setState.name);
        formData.append('body', this.setState.city);
        formData.append('body', this.setState.state);
        formData.append('body', this.setState.description);
        formData.append('image', this.state.image);
        fetch('http://localhost:3000/destinations', {
            method: 'POST',
            body: formData
        })
            .catch(error => console.log(error));



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
                    <textarea type="text" placeholder="Description: " value={this.state.description} name="description" onChange={this.handleChange}>
                    </textarea>
                    <input type="file" accept="image/*" multiple={false} onChange={this.onImageChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addDestination })(DestinationsInput)