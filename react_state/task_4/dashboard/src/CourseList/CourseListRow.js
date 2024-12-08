import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };

    const style = isHeader
        ? styles.headerRow
        : isChecked
        ? styles.rowChecked
        : styles.row;

    return (
        <tr className={css(style)}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th colSpan="2">{textFirstCell}</th>
                ) : (
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                    <td>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxClick}
                        />
                        {textFirstCell}
                    </td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
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
    },
    rowChecked: {
        backgroundColor: '#e6e4e4'
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

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};
