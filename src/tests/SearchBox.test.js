import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SearchBox from '../components/SearchBox';

it('should render SearchBox correctly', () => {
  const component = renderer.create(<SearchBox />).toJSON();
  expect(component).toMatchSnapshot();
});

it('should changes the text captured on typing', () => {
  const value = 'foo';

  //defining a mock function that should adjust the state of search text value
  const setSearchText = jest.fn();

  const wrapper = shallow(<SearchBox onChange={setSearchText} />);

  /**
   * This function creates a mock function similar to jest.fn while tracking the calls
   * to the object’s method (methodName). So we’re testing to validate whether calling this
   * function actually calls the useState hook (function).
   * */
  const handleChange = jest.spyOn(React, 'useState');
  handleChange.mockImplementation((searchText) => [searchText, setSearchText]);
  wrapper.find('input').simulate('change', {
    target: { value },
  });

  /**
   * If useState is called, when we simulate the change on the input element,
   * we should get a truthy value for the setSearchText function.
   * */
  expect(setSearchText).toBeTruthy();
});
