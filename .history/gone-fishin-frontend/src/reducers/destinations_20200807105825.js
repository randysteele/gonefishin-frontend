
export default function destinations(state = {destinations: []}, action) {
    //debugger
    switch(action.type){
    case 'FETCH_DESTINATIONS':
      return {destinations: action.payload}
    case 'ADD_FEATURE':
      let destinations = state.destinations.map(destination => {
        if (destination.id === action.payload.id) {
         return action.payload
        } else {
          return destination
        }
      }) 
      return {...state, destinations: destinations}
    default:
    return state
    }
}

