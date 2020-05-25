import React from 'react';
import renderer from 'react-test-renderer';
import RegistrationForm from './RegistrationForm';

it('renders correctly', () => {
  const tree = renderer.create(<RegistrationForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
