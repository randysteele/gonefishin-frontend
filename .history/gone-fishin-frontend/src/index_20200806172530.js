import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import destinations from './reducers/destinations'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(destinations, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}> 
<Router>
<App />
</Router>
</Provider>, 
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
