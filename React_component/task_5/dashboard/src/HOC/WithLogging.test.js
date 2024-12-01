import React, { Component } from 'react';
import WithLogging from '../HOC/WithLogging';
import './Login.css';

describe('WithLogging HOC', () => {
    let container = null;
    let consoleLogSpy;

    beforeEach(() => {
        // Set up a DOM element as a render target
        container = document.createElement('div');
        document.body.appendChild(container);
        // Mock console.log
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterEach(() => {
        // Clean up on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
        // Restore console.log
        consoleLogSpy.mockRestore();
    });

    it('should log on mount and unmount when wrapped element is pure HTML', () => {
        const WrappedComponent = WithLogging(() => <p />);
        render(<WrappedComponent />, container);

        expect(consoleLogSpy).toHaveBeenCalledWith('Component is mounted');
        unmountComponentAtNode(container);
        expect(consoleLogSpy).toHaveBeenCalledWith('Component is going to unmount');
    });

    it('should log on mount and unmount with the component name when wrapped element is the Login component', () => {
        const WrappedLogin = WithLogging(Login);
        render(<WrappedLogin />, container);

        expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted');
        unmountComponentAtNode(container);
        expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount');
    });
});