import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr>
      {isHeader ? (
        <th colSpan="2">{textFirstCell}</th>
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: ''
};

export default CourseListRow;
