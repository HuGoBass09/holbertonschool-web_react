import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging HOC', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('should log messages for a pure HTML element', () => {
    const WrappedComponent = WithLogging(() => <p>Test</p>);

    const wrapper = shallow(<WrappedComponent />);

    // Check for the mount log
    expect(consoleLogSpy).toHaveBeenCalledWith('Component is mounted');

    // Unmount the component
    wrapper.unmount();

    // Check for the unmount log
    expect(consoleLogSpy).toHaveBeenCalledWith('Component is going to unmount');
  });

  it('should log messages for a named component', () => {
    const Login = () => <div>Login</div>;
    Login.displayName = 'Login';

    const WrappedComponent = WithLogging(Login);

    const wrapper = shallow(<WrappedComponent />);

    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();

    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
