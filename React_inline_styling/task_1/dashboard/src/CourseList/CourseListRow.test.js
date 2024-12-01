/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import React from "react";
import CourseListRow from "./CourseListRow";

describe('Test CourseListRow.js', () => {
  it('CourseListRow  render without crashing', () => {
    expect(shallow(<CourseListRow textFirstCell='test' />).exists());
  });

  it('render isHeader is True and render with one th', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual("2");
  });

  it('render isHeader is True and render with two th', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test' />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('render isHeader is False and with two td', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test' />);
    expect(wrapper.find('td')).toHaveLength(2);
  });
});