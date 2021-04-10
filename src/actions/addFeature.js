export const addFeature = (feature, destinationId) => {

    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/destinations/${destinationId}/features`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(feature)
    })
    .then(response => response.json())
    .then(destination => dispatch({type: 'ADD_FEATURE', payload: destination}))
    }
}
export default addFeature