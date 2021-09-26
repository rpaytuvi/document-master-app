import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  get: null,
  done: ['documents', 'error'],
});

export const DocumentsTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  documents: [],
});

/* ------------- Selectors ------------- */
export const DocumentsSelectors = {
  documents: state => state.documents.documents,
};

/* ------------- Reducers ------------- */

export const get = (state) => {
  return state.merge({ fetching: true });
};

export const done = (state, action) => {
  const { documents, error = null } = action;
  return state.merge({ 
    fetching: false, 
    documents,
    error,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET]: get,
  [Types.DONE]: done,
});
