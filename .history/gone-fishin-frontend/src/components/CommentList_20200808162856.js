import React from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'



const CommentList = (props) => {

//    const handleDelete = (feature) => {
//        props.deleteFeature(feature.id, feature.destination_id)

//    }

    return (
        <div>
           {props.comments && props.comments.map(comment =>
            <li key={comment.id}>{comment.content}<br></br>
            {/* <button onClick={() => handleDelete(feature)}>Delete</button> */}
            </li>
            )} 
        </div>
    )
}

export default connect(null, {addComment}) (CommentList)