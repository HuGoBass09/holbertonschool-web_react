import React from "react";
import "./CourseList.css";
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow
                    textFirstCell="Course name"
                    textSecondCell="Credit"
                    isHeader={true}
                />
            </thead>
            <tbody>
                {listCourses.length === 0 ? (
                    <CourseListRow
                        textFirstCell="No course available yet"
                        isHeader={false}
                    />
                ) : (
                    listCourses.map((course) => (
                        <CourseListRow
                            key={course.id}  // Assuming each course has a unique id
                            textFirstCell={course.name}
                            textSecondCell={String(course.credit)}
                            isHeader={false}
                        />
                    ))
                )}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;