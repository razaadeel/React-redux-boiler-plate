import rootReducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store;