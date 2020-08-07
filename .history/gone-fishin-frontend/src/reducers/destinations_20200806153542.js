
export default function destinations(state = {destinations: []}, action) {
    debugger
    switch(action.type){
    case 'FETCH_DESTINATIONS':
    return {destinations: action.payload}
    case 'ADD_ACCOUNT':
        return {...state, destinations: [...state.destinations, action.payload]}    
        case 'ADD_FEATURE':
            return { }
    default:
    return state
    }
}

