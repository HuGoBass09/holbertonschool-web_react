import React from "react";
import PropTypes from 'prop-types';
import CourseListRow from "../CourseList/CourseListRow";
import CourseShape from '../CourseList/CourseShape';
import { StyleSheet, css } from 'aphrodite';


//Adding Aphrodite component
const styles = StyleSheet.create({
    table: {
        width: '100%',
        border: '1px solid #ddd',
        borderCollapse: 'collapse',
        margin: '20px 0',
        textAlign: 'left',
    },
    th: {
        borderBottom: '1px solid #ddd',
        padding: '8px',
        backgroundColor: '#f4f4f4',
    },
    td: {
        padding: '8px',
        borderBottom: '1px solid #ddd',
    },
});

function CourseList({ listCourses }) {
    return (
        <table id="CourseList" className={css(styles.table)}>
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
                            key={course.id}
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