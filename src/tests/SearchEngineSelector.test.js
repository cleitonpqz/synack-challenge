import React from 'react';
import renderer from 'react-test-renderer';
import SearchEngineSelector from '../components/SearchEngineSelector';

it('should render SearchEngineSelector correctly', () => {
  const component = renderer.create(<SearchEngineSelector />).toJSON();
  expect(component).toMatchSnapshot();
});
