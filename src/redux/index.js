import {combineReducers} from 'redux';
import configureStore from './store/';
import Root from './sagas/';

/* ------------- Assemble The Reducers ------------- */
const appReducers = combineReducers({
  documents: require('./reducers/documents').reducer,
});

export const reducers = (state, action) => {
  return appReducers(state, action);
};

const createStore = () => {
  let {store, sagasManager, sagaMiddleware} = configureStore(reducers, Root);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);
      const newYieldedSagas = require('./sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};

const store = createStore();

export default store;
