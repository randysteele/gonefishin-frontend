export const addComment = (comment, destinationId) => {

    return (dispatch) => {
    fetch(`https://gonefishin-frontend.herokuapp.com//destinations/${destinationId}/comments`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
    })
    .then(response => response.json())
    .then(destination => dispatch({type: 'ADD_COMMENT', payload: destination}))
    }
}
export default addComment