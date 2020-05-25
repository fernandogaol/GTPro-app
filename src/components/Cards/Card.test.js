import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Card from './Cards';

describe('<NewPostForm />', () => {
  it('Renders without crashing', () => {
    shallow(<Card />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
