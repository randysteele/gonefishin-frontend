
export default function destinations(state = {destinations: []}, action) {
    //debugger
    switch(action.type){
    case 'FETCH_DESTINATIONS':
    return {destinations: action.payload}
    case 'ADD_ACCOUNT':
        return {...state, destinations: [...state.destinations, action.payload]}    
        case 'ADD_FEATURE':
            return {...state, destinations: state.destinations.map(destination => {
                if (destination.id === action.payload.id) {
                 } return {...state, destinations: action.payload } 
            })}
    default:
    return state
    }
}

