
export default function destinations(state = {destinations: []}, action) {
  let destinations = state.destinations.map(destination => {
    if (destination.id === action.payload.id) {
     return action.payload
     debugger
    } else {
      return destination
    }
  }) 

    switch(action.type){
    case 'FETCH_DESTINATIONS':
      return {destinations: action.payload}
    case 'ADD_FEATURE':        
      return {...state, destinations: destinations}
      case 'DELETE_FEATURE':
          return {...state, destinations: destinations}
      case 'EDIT_DESTINATION':
          return {...state, destinations: destinations} 
          case 'ADD_COMMENT':
            debugger
            return {...state, destinations: destinations}      
    default:
    return state
    }
}

