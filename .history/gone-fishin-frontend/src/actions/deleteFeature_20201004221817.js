export const deleteFeature = (featureId, destinationId) => {

    return (dispatch) => {
       return fetch(`https://gonefishinbackend.herokuapp.com/api/v1/destinations/${destinationId}/features/${featureId}`, { 
        method: 'DELETE'       
    })
     .then(response => response.json())
     .then(destination => dispatch({type: 'DELETE_FEATURE', payload: destination}))
  }
}
