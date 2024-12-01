import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders NotificationItem components', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.text()).toContain('Here is the list of notifications');
    });

    it('the first NotificationItem renders the right html', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem).at(0).prop('type')).toEqual('default');
        expect(wrapper.find(NotificationItem).at(0).prop('value')).toEqual('New course available');
    });
});
