
export default function destinationReducer(state = {destination: []}, action) {
    
    switch(action.type){
    case 'FETCH_DESTINATIONS':
    return {destinations: action.payload}
    
    default:
    return state
    }
}

