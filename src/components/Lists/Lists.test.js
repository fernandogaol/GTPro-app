import React from 'react';
import renderer from 'react-test-renderer';
import Lists from './Lists';

it('renders correctly', () => {
  const tree = renderer.create(<Lists />).toJSON();
  expect(tree).toMatchSnapshot();
});
