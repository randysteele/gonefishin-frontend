
export default function destination(state = {destinations: [city = {}, state = {}, description = {}]}, action) {
    
    switch(action.type){
    case 'FETCH_DESTINATIONS':
    return {destinations: action.payload}
    
    default:
    return state
    }
}

