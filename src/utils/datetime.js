import moment from 'moment';

const relative = date => {
  const m = moment(date);
  return m.fromNow();
};

export default {
  relative,
};
