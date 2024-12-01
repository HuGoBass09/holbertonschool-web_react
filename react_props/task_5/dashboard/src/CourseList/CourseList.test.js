import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  describe('when listCourses is empty or not provided', () => {
    it('renders correctly with empty listCourses', () => {
      const wrapper = shallow(<CourseList listCourses={[]} />);
      expect(wrapper.containsMatchingElement(<CourseListRow textFirstCell="No course available yet" />)).toBe(true);
      expect(wrapper.find(CourseListRow).length).toBe(3);
    });

    it('renders correctly if listCourses is not passed', () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.containsMatchingElement(<CourseListRow textFirstCell="No course available yet" />)).toBe(true);
      expect(wrapper.find(CourseListRow).length).toBe(3);
    });
  });

  describe('when listCourses contains elements', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    it('renders the correct number of CourseListRows, including headers', () => {
      const wrapper = shallow(<CourseList listCourses={listCourses} />);
      expect(wrapper.find(CourseListRow).length).toBe(5);
    });
  });
});