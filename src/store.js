import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import messagesReducer from './messages/reducer';
import usersReducer from './users/reducer';

const middlewares = [promiseMiddleware()];

if (process.env.NODE_ENV !== 'production') {
  const {logger} = require('redux-logger');

  middlewares.push(logger);
}

const rootReducer = combineReducers({
  messages: messagesReducer,
  users: usersReducer,
})

export const store = createStore(
  rootReducer, 
  {}, 
  applyMiddleware(...middlewares)
);