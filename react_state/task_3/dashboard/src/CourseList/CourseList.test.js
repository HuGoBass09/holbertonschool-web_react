import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

jest.mock('aphrodite', () => ({
	StyleSheet: {
	  create: () => ({}), // Mock de la création des styles
	},
	css: () => '', // Mock de l'utilisation de `css`
  }));

const listCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
];

describe('CourseList Component with listCourses', () => {
	let wrapper;

	beforeEach(() => {
	  wrapper = shallow(<CourseList listCourses={listCourses} />);
	});

	it('Check that it renders CourseList component without crashing', () => {
		shallow(<CourseList />);
	});

	it('Check that it renders the 5 different rows', () => {
		const rowElement = wrapper.find('CourseListRow');
		expect(rowElement).toHaveLength(5);

	});

	it('Check if when you pass a list of courses, the component renders it correctly', () => {
		expect(wrapper.find('CourseListRow').at(2).props()).toEqual({
			isHeader: false,
			textFirstCell: "ES6",
			textSecondCell: 60,
		  });
		  expect(wrapper.find('CourseListRow').at(3).props()).toEqual({
			isHeader: false,
			textFirstCell: "Webpack",
			textSecondCell: 20,
		  });
		  expect(wrapper.find('CourseListRow').at(4).props()).toEqual({
			isHeader: false,
			textFirstCell: "React",
			textSecondCell: 40,
		  });

	});
});

describe('CourseList Component with listCourses empty', () => {
	let wrapper;

	beforeEach(() => {
	  wrapper = shallow(<CourseList listCourses={[]} />);
	});

	it('Check if CourseList renders correctly if you pass an empty array or if you dont pass the listCourses property', () => {
		const rowElement = wrapper.contains('<td colSpan="2">No course available yet</td>');

	});
});
