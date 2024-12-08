import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login Component', () => {
    beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it('renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('renders 2 input and 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});