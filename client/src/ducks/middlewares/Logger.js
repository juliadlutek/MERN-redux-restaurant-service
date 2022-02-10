const logger = store => next => action => {
    console.log('Dispatching action', action);
    console.log('State before', store.getState());
    let result = next(action);
    console.log('State after', store.getState());
    return result;
}

export default logger;