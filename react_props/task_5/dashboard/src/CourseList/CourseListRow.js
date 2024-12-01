import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan=2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
    expect(wrapper.find('th').prop('colSpan')).toBe('2');
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" textSecondCell="Second" />);
    expect(wrapper.find('th').length).toBe(2);
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test" textSecondCell="Second" />);
    expect(wrapper.find('td').length).toBe(2);
  });
});