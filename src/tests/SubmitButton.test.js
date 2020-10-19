import React from 'react';
import { render } from './test-utils';
import SubmitButton from '../components/SubmitButton';

it('should render SubmitButton correctly', () => {
  const component = render(<SubmitButton />);
  expect(component).toMatchSnapshot();
});
