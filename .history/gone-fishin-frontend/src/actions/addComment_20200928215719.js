export const addComment = (comment, destinationId) => {

    return (dispatch) => {
    fetch(`https://dashboard.heroku.com/apps/gonefishin-backend/settings/destinations/${destinationId}/comments`, {
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