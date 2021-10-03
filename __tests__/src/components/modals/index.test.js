import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {CustomModal} from '../../../../src/components';

test('renders correctly', () => {
  const tree = renderer.create(<CustomModal />).toJSON();
  expect(tree).toMatchSnapshot();
});
