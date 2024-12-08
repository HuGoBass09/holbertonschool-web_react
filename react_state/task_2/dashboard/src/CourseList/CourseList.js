import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape'
import { StyleSheet, css } from 'aphrodite';

export default function CourseList( { listCourses }) {
	return (
		<table className={css(styles.table)}>
		<thead>
			<CourseListRow textFirstCell="Available courses" isHeader={true} />
			<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
		</thead>
		<tbody>
			{listCourses.length > 0 ? (
				listCourses.map(({ id, name, credit }) => (
					<CourseListRow key={id} textFirstCell={name} textSecondCell={credit} isHeader={false} />
				))
			) : (
				<tr>
					<td colSpan="2" className={css(styles.noCourses)}>No course available yet</td>
				</tr>
			)}
		</tbody>
	</table>
);
}

const styles = StyleSheet.create({
    table: {
        width: '80%',
        margin: '20px auto',
        borderCollapse: 'collapse',
        border: '2px solid rgb(209, 203, 203)',
    },
    noCourses: {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#f5f5f5ab'
    }
});

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
  };
CourseList.defaultProps = {
	listCourses: [],
};
