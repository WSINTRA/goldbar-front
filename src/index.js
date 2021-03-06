import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import reducer from './redux/reducer'
import { Provider } from 'react-redux'

//create a function called reducer and pass that to the store
//whatever the reducer returns becomes state.

let store = createStore(reducer)
// console.log("Getting state", store.getState())

// store.dispatch({type:"ADD_GOLDBARS", payload: "something"}) //How we want to change state
//Dispatch only takes actions


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
