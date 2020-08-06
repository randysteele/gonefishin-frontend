import React from 'react'
import {connect} from 'react-redux'


class FeaturesInput extends React.Component {

    state = {
        name: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

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
export default connect(null, {}) (FeaturesInput)