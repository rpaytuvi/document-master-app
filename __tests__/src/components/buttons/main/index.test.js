import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {MainButton} from '../../../../../src/components';

test('renders correctly', () => {
  const tree = renderer.create(<MainButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
