import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

jest.mock('aphrodite', () => ({
	StyleSheet: {
	  create: () => ({}),
	},
	css: () => '',
  }));

describe('CourseListRow Component', () => {

	it('test the component renders one cell with colspan = 2 when textSecondCell does not exist', () => {
	  const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="1"/>);
	  const thElement = wrapper.find('th');
	  expect(thElement).toHaveLength(1);
	  expect(thElement.prop('colSpan')).toBe("2");
	});

	it('test the component renders two cells when textSecondCell is present', () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="2" textSecondCell="hello"/>);
		const thElement = wrapper.find('th');
		expect(thElement).toHaveLength(2);
	  });

	it('test the component renders correctly two td elements within a tr element', () => {
		const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="1" textSecondCell="2"/>);
		const tdElement = wrapper.find('td');
		expect(tdElement).toHaveLength(2);
		expect(tdElement.at(0).text()).toBe('1');
    	expect(tdElement.at(1).text()).toBe('2');
	  });
  });
