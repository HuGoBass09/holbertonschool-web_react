import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.displayName = WrappedComponent.name ? `WithLogging(${WrappedComponent.name})` : `WithLogging(Component)`;
        }

        componentDidMount() {
            console.log(`Component ${WrappedComponent.name ? WrappedComponent.name : 'Component'} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.name ? WrappedComponent.name : 'Component'} is going to unmount`);
        }
        
        render() {
            return <WrappedComponent {...this.props} />
        }
    } 
}

export default WithLogging;