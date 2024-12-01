
import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toEqual(2);
    expect(wrapper.find('label').length).toEqual(2);
  });
});
