import React from "react";
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';


const styles = StyleSheet.create({
  bodySection: {
    marginTop: '10px',
    width: '600px',
    minWidth: '300px'
  }
})

class BodySection extends React.Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <div className={css(styles.bodySection)}>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySection.propTypes = {
    title: PropTypes.string
}

BodySection.defaultProps = {
    title: ''
}

export default BodySection;