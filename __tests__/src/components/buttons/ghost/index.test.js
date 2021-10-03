import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {GhostButton} from '../../../../../src/components';

test('renders correctly', () => {
  const tree = renderer.create(<GhostButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
