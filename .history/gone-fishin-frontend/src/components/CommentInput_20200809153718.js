import React from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'


class CommentInput extends React.Component {

    state = {
        content: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value            
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addComment(this.state, this.props.destinations.id)    
        this.setState({
         content: ''
        })
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Comment:</label>
                    <input type="text" name="content" value ={this.state.content} onChange={this.handleChange}/>
                    <Button type="submit">Submit</Button>

                </form>


            </div>
        )
    }
}

export default connect(null, {addComment}) (CommentInput)