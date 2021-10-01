import {call, put} from 'redux-saga/effects';
import DocumentsActions from '../reducers/documents';

export function* get(documentsApi, action) {
  const response = yield call(documentsApi.get);
  if (response.ok) {
    console.log(response.data);
    yield put(DocumentsActions.done(response.data));
  } else {
    yield put(DocumentsActions.done([], 'Unexpected error loading documents'));
  }
}
