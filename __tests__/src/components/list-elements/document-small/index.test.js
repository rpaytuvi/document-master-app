import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {DocumentSmallListElement} from '../../../../../src/components';

test('renders correctly', () => {
  const tree = renderer.create(<DocumentSmallListElement />).toJSON();
  expect(tree).toMatchSnapshot();
});
