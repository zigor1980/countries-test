import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

export default function configureStore() {
  const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools({}) : compose;
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer(), {}, composeEnhancers(...enhancers));

  return store;
}
