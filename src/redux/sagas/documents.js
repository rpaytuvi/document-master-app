import {call, put, select} from 'redux-saga/effects';
import {Alert} from 'react-native';
import DocumentsActions, {DocumentsSelectors} from '../reducers/documents';

export function* get(documentsApi, action) {
  const response = yield call(documentsApi.get);
  if (response.ok) {
    yield put(DocumentsActions.done(response.data));
  } else {
    yield put(DocumentsActions.done([], 'Unexpected error loading documents'));
  }
}

export function* save(documentsApi, action) {
  const {document} = action;
  const documents = yield select(DocumentsSelectors.documents);
  let newDocuments = [...documents];
  const response = yield call(documentsApi.post, document);
  let title = 'Document saved';
  let message = `Your document ${document.Title}, version ${document.Version} was saved successfully`;
  if (response.ok) {
    newDocuments.push(document);
  } else {
    title = 'Document not saved';
    message = `Unexpected error saving your document ${document.Title}, version ${document.Version}`;
  }
  Alert.alert(title, message, [
    {
      text: 'Got it',
      onPress: () => {},
      style: 'cancel',
    },
  ]);
  yield put(DocumentsActions.done(newDocuments));
}
