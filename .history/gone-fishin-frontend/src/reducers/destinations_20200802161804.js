// export default (state = [], action) => {
//     switch(action.type){
//     default:
//         return action 
//     }
// }


export default function destinationReducer(state = {destinations: []}, action) {
    
    switch(action.type){
    case 'FETCH_DESTINATIONS':
    return {destinations}
    
    
    return state
    }
}

