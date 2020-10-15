import React from 'react';
import renderer from 'react-test-renderer';
import SearchBox from '../components/SearchBox';

it('should render SearchBox correctly', () => {
  const component = renderer.create(<SearchBox />).toJSON();
  expect(component).toMatchSnapshot();
});
