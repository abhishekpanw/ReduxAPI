import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootreducer from './reducers';

const middleware = [thunk , logger]
const store = createStore(rootreducer,applyMiddleware(...middleware));
export default store;