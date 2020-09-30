

export function fetchDestinations() {
  return (dispatch) => {
   fetch("https://git.heroku.com/tranquil-river-97007.git/destinations/")
    .then(response => response.json())
    .then(destinations => dispatch({
      type: 'FETCH_DESTINATIONS',
       payload: destinations
    }))
  }
}

