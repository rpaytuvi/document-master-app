import {Platform} from 'react-native';
import {w3cwebsocket as W3CWebSocket} from 'websocket';

const url =
  Platform.OS === 'android' ? 'ws://10.0.2.2:8080/' : 'ws://localhost:8080/';

export default new W3CWebSocket(`${url}notifications`);
