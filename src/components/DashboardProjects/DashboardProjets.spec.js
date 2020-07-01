import React from 'react';
import renderer from 'react-test-renderer';
import DashboardProjects from './DashboardProjects';

it('renders correctly', () => {
  const tree = renderer.create(<DashboardProjects />).toJSON();
  expect(tree).toMatchSnapshot();
});
