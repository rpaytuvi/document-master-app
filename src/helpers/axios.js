import axios from 'axios';

const get = url => {
  const options = {
    url,
    method: 'get',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  };
  return axios(options)
    .then(response => {
      return {ok: true, status: 200, data: response.data};
    })
    .catch(err => {
      const {response, message = 'Unexpected error'} = err || {};
      const {status = 500, data} = response || {};
      return {ok: false, status, message, data};
    });
};

const post = (url, data) => {
  const options = {
    url,
    method: 'post',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    data,
  };
  return axios(options)
    .then(response => {
      return {ok: true, status: 200, data: response.data};
    })
    .catch(err => {
      const {response, message = 'Unexpected error'} = err || {};
      const {status = 500, data: responseData} = response || {};
      return {ok: false, status, message, data: responseData};
    });
};

export default {
  get,
  post,
};
