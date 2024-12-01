import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from "./CourseShape";

const styles = StyleSheet.create({
    CourselistContainer: {
        minHeight: '26rem',
        minWidth: '500px',
        padding: '2rem'
    },
    CourseList: {
        width: '100%'
    }
})


export default function CourseList({ listCourses }) {
    return (
    <div className={css(styles.CourselistContainer)}>
        <table className={css(styles.CourseList)}>
            <thead>
                <CourseListRow textFirstCell='Available courses' isHeader={true} />
                <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length === 0 ? (<CourseListRow textFirstCell="No course available yet" isHeader={false}/>) : <></>}
                {listCourses.map((course) => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>))}
            </tbody>
        </table>
    </div>
    )
}

CourseList.defaultProps = {
    listCourses: [],
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
}