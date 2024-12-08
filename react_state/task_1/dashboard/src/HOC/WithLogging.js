import React, { Component } from 'react';

// Higher-Order Component (HOC) for logging
const WithLogging = (WrappedComponent) => {
    class WithLoggingComponent extends Component {
        // Log when the component is mounted
        componentDidMount() {
            const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
            console.log(`Component ${componentName} is mounted`);
        }

        // Log when the component is about to unmount
        componentWillUnmount() {
            const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
            console.log(`Component ${componentName} is going to unmount`);
        }

        render() {
            // Render the wrapped component with all props passed through
            return <WrappedComponent {...this.props} />;
        }
    }

    // Set the displayName for better debugging and React DevTools support
    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    WithLoggingComponent.displayName = `WithLogging(${wrappedComponentName})`;

    return WithLoggingComponent;
};

export default WithLogging;