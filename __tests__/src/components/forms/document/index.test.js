import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {DocumentForm} from '../../../../../src/components';

test('renders correctly', () => {
  const tree = renderer.create(<DocumentForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
