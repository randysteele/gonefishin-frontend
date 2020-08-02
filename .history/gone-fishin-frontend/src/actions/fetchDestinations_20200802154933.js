

export function fetchDestinations(action) {
    console.log('inside fetch destinations!')
    fetch("http://localhost:3000/api/v1/destinations/")
    .then(response => response.json())
    .then(data => console.log(data))
  
  return action 

}

