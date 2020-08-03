import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import destinationReducer from './reducers/destinations'
import thunk from 'redux-thunk'

// const reducer = combineReducers({ 
//   dest: destinationReducer
   
//   })
  


// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))


export default store 