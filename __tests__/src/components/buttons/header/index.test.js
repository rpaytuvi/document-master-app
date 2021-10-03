import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {HeaderButton} from '../../../../../src/components';

test('renders correctly', () => {
  const tree = renderer.create(<HeaderButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
