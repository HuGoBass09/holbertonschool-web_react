import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
    it('menu item is displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={[]} />);
        expect(wrapper.find('.menuItem').text()).toEqual('Your notifications');
        expect(wrapper.exists('.Notifications')).toBe(false);
    });

    it('div.Notifications is not displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.exists('.Notifications')).toBe(false);
    });

    it('menu item is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.find('.menuItem').text()).toEqual('Your notifications');
        expect(wrapper.exists('.Notifications')).toBe(true);
    });

    describe('with a list of notifications and displayDrawer true', () => {
        const notifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
        ];

        it('renders the correct number of notifications', () => {
            const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);
            expect(wrapper.find(NotificationItem).length).toBe(notifications.length);
        });
    });
});