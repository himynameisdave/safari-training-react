import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app.jsx';
import store from './redux/store.js';
import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main')
);
