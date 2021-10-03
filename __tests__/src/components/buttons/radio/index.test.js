import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {RadioButton} from '../../../../../src/components';

test('renders correctly', () => {
  const tree = renderer.create(<RadioButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
