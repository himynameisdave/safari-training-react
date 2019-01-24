
const loggingMiddleware = (store) => (next) => (action) => {
    console.groupCollapsed(action.type);
    console.log('Action:', action);
    console.log('State - Before:', store.getState());
    const result = next(action);
    console.log('State - After:', store.getState());
    console.groupEnd(action.type);
    return result;
};

export default loggingMiddleware;
