import {Axios} from '../helpers';

const create = (baseUrl = 'http://10.0.2.2:8080') => {
  const get = () => Axios.get(`${baseUrl}documents`);

  return {
    get,
  };
};

export default {
  create,
};
