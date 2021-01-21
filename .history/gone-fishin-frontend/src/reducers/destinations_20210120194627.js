
export default function destinations(state = {destinations: []}, action) {
  let destinations = state.destinations.map(destination => {
    if (destination.id === action.payload.id) {
     return action.payload
    } else {
      return destination
    }
  }) 

    switch(action.type){
    case 'FETCH_DESTINATIONS':
      return {destinations: action.payload}
    case 'ADD_DESTINATIONS':
      return {...state, destinations: [...state.destinations, action.payload]}  
    case 'ADD_FEATURE':        
      return {...state, destinations: destinations}
    case 'DELETE_FEATURE':
      return {...state, destinations: destinations}
    case 'EDIT_DESTINATION':
      return {...state, destinations: destinations} 
    case 'ADD_COMMENT':
      return {...state, destinations: destinations}   
      case 'DELETE_DESTINATION':
        return {...state, destinations: destinations}
      default: 
      return state
    }
}