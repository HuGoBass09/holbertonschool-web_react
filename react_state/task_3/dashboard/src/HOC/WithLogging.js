import React, { Component } from 'react';

const WithLogging = WrappedComponent => {
	class WithLoggingHOC extends Component {
		componentDidMount() {
			const name = WrappedComponent.displayName || WrappedComponent.name;
			if (name) {
			console.log(`Component ${name} is mounted`);
			}
			console.log(`Component is mounted`);
		}

		componentWillUnmount() {
			const name = WrappedComponent.displayName || WrappedComponent.name;
			if (name) {
			console.log(`Component ${name} is going to unmount`);
		}
		console.log(`Component is going to unmount`);
	}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	// Set the display name for debugging purposes
	WithLoggingHOC.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

	return WithLoggingHOC;
};

export default WithLogging;

