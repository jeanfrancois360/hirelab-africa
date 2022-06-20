import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AllReducers from './reducers';

const middlewares = [thunk];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// This function helps to create the application store
const store = createStore(
  AllReducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
