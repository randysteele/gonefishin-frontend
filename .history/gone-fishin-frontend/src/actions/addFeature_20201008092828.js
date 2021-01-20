export const addFeature = (feature, destinationId) => {

    return (dispatch) => {
    fetch(`https://gonefishinbackend.herokuapp.com/api/v1/destinations/${destinationId}/features`, {
    method: 'POST',
    headers: {
        // 'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(feature)
    })
    .then(response => response.json())
    .then(destination => dispatch({type: 'ADD_FEATURE', payload: destination}))
    }
}
export default addFeature