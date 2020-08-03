
export default function destination(state = {destination: []}, action) {
    
    switch(action.type){
    case 'FETCH_DESTINATIONS':
    return {destinations: action.payload}
    
    default:
    return state
    }
}

