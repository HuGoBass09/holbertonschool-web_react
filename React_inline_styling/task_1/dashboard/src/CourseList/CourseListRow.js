import React from "react";
import PropTypes from "prop-types";

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {

  const rowStyle = { backgroundColor: '#f5f5f5ab'}
  const headerStyle = { backgroundColor: '#deb5b545'}
  const text = {textAlign: 'center', border:'1px solid lightgray'}

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={headerStyle}>
          <th colSpan="2" style={text}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={headerStyle}>
          <th style={text}>{textFirstCell}</th>
          <th style={text}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={rowStyle}>
        <td style={text}>{textFirstCell}</td>
        <td style={text}>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) 
};
