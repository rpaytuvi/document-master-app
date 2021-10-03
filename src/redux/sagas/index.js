import {takeLatest, all} from 'redux-saga/effects';
import {DocumentsTypes} from '../reducers/documents';
import {Documents} from '../../services';
import {get, save} from './documents';

const documentsApi = Documents.create();

export default function* root() {
  yield all([
    takeLatest(DocumentsTypes.GET, get, documentsApi),
    takeLatest(DocumentsTypes.SAVE, save, documentsApi),
  ]);
}
