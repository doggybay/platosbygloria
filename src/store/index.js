import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import plates from './plates/reducer';
import customers from './customers/reducer';

const rootReducer = combineReducers({ plates, customers });

const middleware = [thunk, logger];

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));