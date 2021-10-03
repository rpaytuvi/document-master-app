import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {DocumentLargeListElement} from '../../../../../src/components';

test('renders correctly', () => {
  const tree = renderer.create(<DocumentLargeListElement />).toJSON();
  expect(tree).toMatchSnapshot();
});
