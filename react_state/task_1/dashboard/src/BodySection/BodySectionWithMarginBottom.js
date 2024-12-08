import React, { Component } from "react";
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import "./BodySectionWithMarginBottom.css";
import { StyleSheet, css } from 'aphrodite';

//Using Aphrodite
const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
    },
});
class BodySectionWithMarginBottom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bodySectionWithMargin">
                <BodySection {...this.props} />
            </div>
        );
    }
}

BodySectionWithMarginBottom.defaultProps = {
    title: "",
};

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
};

export default BodySectionWithMarginBottom;