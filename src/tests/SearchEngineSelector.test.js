import React from 'react';
import { render } from './test-utils';
import SearchEngineSelector from '../components/SearchEngineSelector';

it('should render SearchEngineSelector correctly', () => {
  const component = render(<SearchEngineSelector />);
  expect(component).toMatchSnapshot();
});
