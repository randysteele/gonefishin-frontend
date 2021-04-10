export const addComment = (comment, destinationId) => {

    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/destinations/${destinationId}/comments`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
   body: JSON.stringify(comment)
    })
    .then(response => response.json())
    .then(destination => dispatch({type: 'ADD_COMMENT', payload: destination}))
    }
}
export default addComment

