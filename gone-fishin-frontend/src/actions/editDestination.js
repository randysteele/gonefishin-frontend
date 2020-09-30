export const editDestination = (data) => {
    
    return (dispatch) => {
        fetch(`https://tranquil-river-97007.herokuapp.com/destinations/${data.id}`, {
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
