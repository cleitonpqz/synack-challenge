import React from 'react';
import { render, screen } from './test-utils';
import userEvent from '@testing-library/user-event';
import SearchBox from '../components/SearchBox';

it('should render SearchBox correctly', () => {
  const component = render(<SearchBox />);
  expect(component).toMatchSnapshot();
});

it('should changes the text captured on typing', () => {
  const value = 'foo';
  render(<SearchBox />);

  const input = screen.getByRole('textbox');

  expect(input).toHaveValue('');
  userEvent.type(input, value);
  expect(input).toHaveValue(value);
});
