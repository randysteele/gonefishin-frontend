// export default (state = [], action) => {
//     switch(action.type){
//     default:
//         return action 
//     }
// }


export default function destinationReducer(state = {destination: []}, action) {
    
    switch(action.type){
    case 'FETCH_DESTINATIONS':
    return {destination: action.payload}
    
    default:
    return state
    }
}

