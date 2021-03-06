import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import alertsReducer  from './reducers/alerts-reducer';
import resourceReducer  from './reducers/resource-reducer';
import memoryReducer  from './reducers/memoryreducer';
import alertThresholdReducer from './reducers/alertTheshold-reducer';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';


const allReducers = combineReducers({
    alerts: alertsReducer,
    alertThreshold : alertThresholdReducer,
    resources: resourceReducer,
    ram: memoryReducer,
})

const store = createStore(
    allReducers, {
    guid: 1,
    alertThreshold: 'Daily',
    resources: 'My Server',
    },
    window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
