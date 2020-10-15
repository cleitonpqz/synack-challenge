import React from 'react';
import renderer from 'react-test-renderer';
import SubmitButton from '../components/SubmitButton';

it('should render SubmitButton correctly', () => {
  const component = renderer.create(<SubmitButton />).toJSON();
  expect(component).toMatchSnapshot();
});
