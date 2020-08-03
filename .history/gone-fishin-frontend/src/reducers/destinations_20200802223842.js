
export default function destinationReducer(state = {destination: []}, action) {
    
    const reducer = combineReducers({ 
        dest: destinationReducer
         
        })
      
    switch(action.type){
    case 'FETCH_DESTINATIONS':
    return {destinations: action.payload}
    
    default:
    return state
    }
}

