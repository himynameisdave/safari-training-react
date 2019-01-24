import { localStorageKey } from '../../constants.js';


const loggingMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    const state = JSON.stringify(store.getState());
    localStorage.setItem(localStorageKey, state);
    return result;
};

export default loggingMiddleware;
