import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {DocumentsListHeader} from '../../../../../src/components';

test('renders correctly', () => {
  const tree = renderer.create(<DocumentsListHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
