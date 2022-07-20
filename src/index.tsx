import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Navigation from "./app/navigation/navigation";
import {Provider} from 'react-redux'
import {compose, createStore} from 'redux'
import {rootReducer} from './app/reducers/reducers'

export const store = createStore(rootReducer,compose(
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
    <Provider store={store}>
        <Navigation/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
