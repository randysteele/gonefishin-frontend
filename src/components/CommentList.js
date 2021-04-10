import React from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'



const CommentList = (props) => {


    return (
        <div>
           {props.comments && props.comments.map(comment =>
            <li key={comment.id}>{comment.content}<br></br>
            </li>
            )} 
        </div>
    )
}

export default connect(null, {addComment}) (CommentList)