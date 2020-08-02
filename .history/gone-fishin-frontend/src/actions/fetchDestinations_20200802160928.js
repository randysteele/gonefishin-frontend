

export function fetchDestinations(action) {
  return (dispatch) => {
  fetch("http://localhost:3000/api/v1/destinations/")
    .then(response => response.json())
    .then(data => console.log(data))
  }
}

