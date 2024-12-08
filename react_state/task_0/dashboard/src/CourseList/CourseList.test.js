import { shallow } from "enzyme";
import React from "react";
import CourseList from "..CourseList/CourseList";
import { StyleSheetTestUtils } from 'aphrodite';

describe("<CourseList />", () => {
    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it("CourseList renders without crashing", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toEqual(true);
    });
    it("it renders the 5 different rows", () => {
        const wrapper = shallow(<CourseList />);
        wrapper.update();
        const item = wrapper.find("CourseListRow");

        expect(item).toHaveLength(5);

        expect(item.at(0).prop("textFirstCell")).toEqual("Available courses");
        expect(item.at(0).prop("isHeader")).toEqual(true);

        expect(item.at(1).prop("textFirstCell")).toEqual("Course name");
        expect(item.at(1).prop("textSecondCell")).toEqual("Credit");
        expect(item.at(1).prop("isHeader")).toEqual(true);

        expect(item.at(2).prop("textFirstCell")).toEqual("ES6");
        expect(item.at(2).prop("textSecondCell")).toEqual("60");
        expect(item.at(2).prop("isHeader")).toEqual(false);

        expect(item.at(3).prop("textFirstCell")).toEqual("Webpack");
        expect(item.at(3).prop("textSecondCell")).toEqual("20");
        expect(item.at(3).prop("isHeader")).toEqual(false);

        expect(item.at(4).prop("textFirstCell")).toEqual("React");
        expect(item.at(4).prop("textSecondCell")).toEqual("40");
        expect(item.at(4).prop("isHeader")).toEqual(false);
    });
});

// New test suite: When CourseList is empty or listCourses is not provided
describe("With CourseList Empty", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CourseList listCourses={[]} />);
    });

    it("CourseList renders without crashing", () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it("CourseList renders correctly with an empty list", () => {
        const items = wrapper.find("CourseListRow");
        expect(items).toHaveLength(3);  // Only headers and empty notification
        expect(items.at(2).prop("textFirstCell")).toEqual("No course available yet");
        expect(items.at(2).prop("isHeader")).toEqual(false);
    });
});

// New test suite: When CourseList is provided with courses
describe("With CourseList containing elements", () => {
    let wrapper;
    const courses = [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
    ];

    beforeEach(() => {
        wrapper = shallow(<CourseList listCourses={courses} />);
    });

    it("CourseList renders without crashing", () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it("renders the correct number of CourseListRow elements", () => {
        const items = wrapper.find("CourseListRow");
        expect(items).toHaveLength(5); // 2 headers + 3 courses
    });

    it("renders the correct content of CourseListRow elements", () => {
        const items = wrapper.find("CourseListRow");
        expect(items.at(2).prop("textFirstCell")).toEqual("ES6");
        expect(items.at(2).prop("textSecondCell")).toEqual("60");

        expect(items.at(3).prop("textFirstCell")).toEqual("Webpack");
        expect(items.at(3).prop("textSecondCell")).toEqual("20");

        expect(items.at(4).prop("textFirstCell")).toEqual("React");
        expect(items.at(4).prop("textSecondCell")).toEqual("40");
    });

    describe('Courselist test', () => {
        beforeAll(() => {
            StyleSheetTestUtils.suppressStyleInjection();
        });

        afterAll(() => {
            StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
        });
    });
});
