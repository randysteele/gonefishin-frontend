export const editDestination = (data) => {
    
    return (dispatch) => {
        fetch(`https://gonefishin-backend.firebaseapp.com/api/v1/destinations/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(destination => dispatch({type: 'EDIT_DESTINATION', payload: destination}))
    }
}
