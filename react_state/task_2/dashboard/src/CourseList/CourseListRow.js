import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const rowStyle = {
	backgroundColor: '#f5f5f5ab',
}

const headerrowStyle = {
	backgroundColor: '#deb5b545',
}

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
	if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr>
                    <th className={css(styles.headerRow)} colSpan={2}>{textFirstCell}</th>
                </tr>
            )
        }
        else {
            return (
                <tr>
                    <th className={css(styles.headerRow)}>{textFirstCell}</th>
                    <th className={css(styles.headerRow)}>{textSecondCell}</th>
                </tr>
            )
        }
    }
    else {
        return (
            <tr>
                <td className={css(styles.row)}>{textFirstCell}</td>
                <td className={css(styles.row)}>{textSecondCell}</td>
            </tr>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: '#f5f5f5ab',
        border: '2px solid rgb(209, 203, 203)',
        padding: '3px'
    },
    headerRow: {
        backgroundColor: '#deb5b545',
        textAlign: 'center',
        padding: '5px',
        border: '2px solid rgb(209, 203, 203)',
        ':first-child': {
            borderRight: 'none'
        },
        ':nth-child(2)': {
            borderLeft: 'none'
        },
    }
});

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	  ]),
};

// Default props
CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};
