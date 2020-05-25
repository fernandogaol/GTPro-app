import React from 'react';
import renderer from 'react-test-renderer';
import ProjectList from './ProjectList';

it('renders correctly', () => {
  const tree = renderer.create(<ProjectList />).toJSON();
  expect(tree).toMatchSnapshot();
});
