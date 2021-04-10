

export function fetchDestinations() {
  return (dispatch) => {
   fetch("https://gonefishinbackend.herokuapp.com/api/v1/destinations/")
    .then(response => response.json())
    .then(destinations => dispatch({
      type: 'FETCH_DESTINATIONS',
       payload: destinations
    }))
  }
}


//    fetch("https://gonefishinbackend.herokuapp.com/api/v1/destinations/")
