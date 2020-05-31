import '../css/main.scss';
import App from './containers/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import thunkMiddleware from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));