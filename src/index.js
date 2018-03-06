import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import "./static/css/styles.css";
import "./static/css/carousel.css";

import { Provider } from "react-redux"
import initData from "./data/initialState"
import storeFactory from "./store"
import App from "./App";



const initialState = localStorage["inwk-store"] ?
    JSON.parse(localStorage["inwk-store"]) :
    initData


const saveState = () =>  localStorage["inwk-store"] = JSON.stringify(store.getState())


const store = storeFactory(initialState)
store.subscribe(saveState)

// window.React = React
// window.store = store


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
