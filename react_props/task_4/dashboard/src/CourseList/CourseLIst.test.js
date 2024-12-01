import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders five rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow').length).toBe(5);
  });
});
