import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {DocumentsList} from '../../../../../src/components';

test('renders correctly', () => {
  const tree = renderer.create(<DocumentsList />).toJSON();
  expect(tree).toMatchSnapshot();
});
