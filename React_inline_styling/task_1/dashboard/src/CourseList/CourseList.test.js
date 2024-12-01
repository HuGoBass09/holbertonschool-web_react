/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const listCourses = [
	{id: 1, name: 'ES6', credit: 60},
	{id: 2, name: 'Webpack', credit: 20},
	{id: 3, name: 'React', credit: 40},
];

describe('With CourseList Empty', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<CourseList />);
	});

	it('render CourseList component without crashing', () => {
		expect(wrapper).toHaveLength(1);
		expect(wrapper.exists()).toBe(true);
	});

	it('verify that CourseList renders correctly', () => {
		expect(wrapper).toHaveLength(1);
		expect(wrapper.exists()).toBe(true);
    const wrapperTwo = shallow(<CourseList listCourses={[]} />);
		expect(wrapperTwo).toHaveLength(1);
		expect(wrapperTwo.exists()).toBe(true);
	});
});

describe('With CourseList containing elements', () => {
	let wrapperTwo;
	beforeEach(() => {
		wrapperTwo = shallow(<CourseList listCourses={listCourses} />);
	})

  it('render a CourseList component and verify 5 rows', () => {
		expect(wrapperTwo.find(CourseListRow)).toHaveLength(5);
		expect(wrapperTwo.find(CourseListRow).get(0).props.textFirstCell).toEqual('Available courses');
		expect(wrapperTwo.find(CourseListRow).get(0).props.isHeader).toBe(true);
		expect(wrapperTwo.find(CourseListRow).get(1).props.textFirstCell).toEqual('Course name');
		expect(wrapperTwo.find(CourseListRow).get(1).props.textSecondCell).toEqual('Credit');
		expect(wrapperTwo.find(CourseListRow).get(1).props.isHeader).toBe(true);
		expect(wrapperTwo.find(CourseListRow).get(2).props.textFirstCell).toEqual('ES6');
		expect(wrapperTwo.find(CourseListRow).get(2).props.textSecondCell).toEqual(60);
		expect(wrapperTwo.find(CourseListRow).get(2).props.isHeader).toBe(false);
		expect(wrapperTwo.find(CourseListRow).get(3).props.textFirstCell).toEqual('Webpack');
		expect(wrapperTwo.find(CourseListRow).get(3).props.textSecondCell).toEqual(20);
		expect(wrapperTwo.find(CourseListRow).get(3).props.isHeader).toBe(false);
		expect(wrapperTwo.find(CourseListRow).get(4).props.textFirstCell).toEqual('React');
		expect(wrapperTwo.find(CourseListRow).get(4).props.textSecondCell).toEqual(40);
		expect(wrapperTwo.find(CourseListRow).get(4).props.isHeader).toBe(false);
	});

	it('verifies that when you pass a list of courses, the component renders it correctly', () => {
		const wrapperThree = shallow(<CourseList listCourses={[
			{ id: 1, name: 'C', credit: 65 },
			{ id: 2, name: 'Python', credit: 22 },
			{ id: 3, name: 'JS', credit: 13 },
		]} />);
		expect(wrapperThree).toHaveLength(1);
		expect(wrapperThree.exists()).toBe(true);
		expect(wrapperThree.find(CourseListRow)).toHaveLength(5);
		expect(wrapperThree.find(CourseListRow).get(0).props.textFirstCell).toEqual('Available courses');
		expect(wrapperThree.find(CourseListRow).get(0).props.isHeader).toBe(true);
		expect(wrapperThree.find(CourseListRow).get(1).props.textFirstCell).toEqual('Course name');
		expect(wrapperThree.find(CourseListRow).get(1).props.textSecondCell).toEqual('Credit');
		expect(wrapperThree.find(CourseListRow).get(1).props.isHeader).toBe(true);
		expect(wrapperThree.find(CourseListRow).get(2).props.textFirstCell).toEqual('C');
		expect(wrapperThree.find(CourseListRow).get(2).props.textSecondCell).toEqual(65);
		expect(wrapperThree.find(CourseListRow).get(2).props.isHeader).toBe(false);
		expect(wrapperThree.find(CourseListRow).get(3).props.textFirstCell).toEqual('Python');
		expect(wrapperThree.find(CourseListRow).get(3).props.textSecondCell).toEqual(22);
		expect(wrapperThree.find(CourseListRow).get(3).props.isHeader).toBe(false);
		expect(wrapperThree.find(CourseListRow).get(4).props.textFirstCell).toEqual('JS');
		expect(wrapperThree.find(CourseListRow).get(4).props.textSecondCell).toEqual(13);
		expect(wrapperThree.find(CourseListRow).get(4).props.isHeader).toBe(false);
	});
});