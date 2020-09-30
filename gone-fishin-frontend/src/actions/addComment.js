export const addComment = (comment, destinationId) => {

    return (dispatch) => {
    fetch(`https://tranquil-river-97007.herokuapp.com/destinations/${destinationId}/comments`, {
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