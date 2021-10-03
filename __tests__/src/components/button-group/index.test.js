import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ButtonGroup} from '../../../../src/components';

test('renders correctly', () => {
  const tree = renderer.create(<ButtonGroup />).toJSON();
  expect(tree).toMatchSnapshot();
});
