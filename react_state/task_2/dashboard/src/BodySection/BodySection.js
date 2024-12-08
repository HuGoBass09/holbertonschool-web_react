import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BodySection extends Component {

	render() {
		const { title, children } = this.props;

		return (
				<div className="bodySection">
					<h2>{title}</h2>
					{children}
				</div>
		);
	}
}

BodySection.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};

export default BodySection;
