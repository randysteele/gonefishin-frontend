export const deleteFeature = (featureId, destinationId) => {

    return (dispatch) => {
       return fetch(`http://localhost:3000/api/v1/destinations/${destinationId}/features/${featureId}`, { 
        method: 'DELETE'
    })
     .then(response => response.json())
     .then(destination => dispatch({type: 'DELETE_FEATURE', payload: destination}))
  }
}
