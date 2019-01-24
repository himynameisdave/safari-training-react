import { applyMiddleware } from 'redux';
import loggingMiddleware from './logging.js';
import localStorageMiddleware from './local-storage.js';


export default applyMiddleware(
    loggingMiddleware,
    localStorageMiddleware,
);
