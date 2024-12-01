import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders an img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
  });
});
