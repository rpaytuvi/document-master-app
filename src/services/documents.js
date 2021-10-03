import {Platform} from 'react-native';
import {Axios} from '../helpers';

const create = (
  baseUrl = Platform.OS === 'android'
    ? 'http://10.0.2.2:8080/'
    : 'http://localhost:8080/',
) => {
  const get = () => Axios.get(`${baseUrl}documents`);

  const post = document => Axios.post(`${baseUrl}documents`, document);

  return {
    get,
    post,
  };
};

export default {
  create,
};
