const sortByField = (array, field, direction) => {
  return array.sort((a, b) => {
    const fieldA = a[field];
    const fieldB = b[field];
    if (fieldA > fieldB) {
      return direction === 'asc' ? -1 : 1;
    } else if (fieldA < fieldB) {
      return direction === 'asc' ? 1 : -1;
    }
    return 0;
  });
};

export default {
  sortByField,
};
