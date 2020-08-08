import React from 'react'
import CommentInput from '../components/CommentInput'
import CommentList from '../components/CommentList'



class CommentsContainer extends React.Component {
    


    render(){
        return (
            <div>
                <CommentInput destinations={this.props.destination}/><br></br>
                <CommentList comment={this.props.destination && this.props.destination.comments}/>
            </div>
                <FeaturesList features={this.props.destination && this.props.destination.features}/>

        )
    }
}
export default CommentsContainer