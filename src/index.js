import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //allows us to use middleware
import marvelApp from './reducers'; //add reducers which gets things in and out of the storage

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

let store = createStore(marvelApp, applyMiddleware(thunk)) //throws throws to the middleware

ReactDOM.render(
//provides a storage area to the app
<Provider store={store}> 
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
