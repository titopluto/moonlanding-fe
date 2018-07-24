import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import "./static/css/styles.css";
import "./static/css/carousel.css";

import {Provider} from "react-redux"
import initData from "./data/initialState"
import storeFactory from "./store"
import App from "./App";




window.React = React
// window.store = store


ReactDOM.render((
    <App/>),
  document.getElementById('root'));
registerServiceWorker();


