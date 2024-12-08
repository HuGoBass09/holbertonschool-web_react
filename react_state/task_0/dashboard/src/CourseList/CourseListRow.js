import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Define styling
const styles = StyleSheet.create({
    rowStyle: {
        backgroundColor: '#f5f5f5ab',
    },
    headerRowStyle: {
        backgroundColor: '#deb5b545',
    },
    thStyle: {
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
        padding: '8px',
    },
    tdStyle: {
        padding: '8px',
        textAlign: 'left',
    }
});

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
    return (
        <tr className={css(isHeader ? styles.headerRowStyle : styles.rowStyle)}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th colSpan="2" className={css(styles.thStyle)}>{textFirstCell}</th>
                ) : (
                    <>
                        <th className={css(styles.thStyle)}>{textFirstCell}</th>
                        <th className={css(styles.thStyle)}>{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                    <td className={css(styles.tdStyle)}>{textFirstCell}</td>
                    <td className={css(styles.tdStyle)}>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
};

// Define PropTypes for the component
CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// Export the component
export default CourseListRow;
