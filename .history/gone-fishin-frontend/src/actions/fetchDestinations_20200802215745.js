

export function fetchDestinations() {
  return (dispatch) => {
  fetch("http://localhost:3000/api/v1/destinations/")
    .then(response => response.json())
    .then(destination => dispatch({
      type: 'FETCH_DESTINATIONS',
       payload: destinations
    }))
  }
}

