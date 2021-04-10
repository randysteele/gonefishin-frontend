import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import 'semantic-ui-css/semantic.css'
import { Provider } from 'react-redux';
import destinations from './reducers/destinations'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(destinations, composeEnhancer(applyMiddleware(thunk)))


fetch('https://test.cors.workers.dev/?https://httpbin.org/post', {
  method: 'post',
  headers: {
    'x-foo': 'bar',
    'x-bar': 'foo',
    'x-cors-headers': JSON.stringify({
      // allows to send forbidden headers
      // https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name
      'cookies': 'x=123'
    }) 
  }
}).then(res => {
  // allows to read all headers (even forbidden headers like set-cookies)
  const headers = JSON.parse(res.headers.get('cors-received-headers'))
  console.log(headers)
  return res.json()
}).then(console.log)

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
// serviceWorker.unregister();

