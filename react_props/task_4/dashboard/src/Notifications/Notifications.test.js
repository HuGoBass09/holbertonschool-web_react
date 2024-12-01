import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
    it('menu item is displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem').text()).toEqual('Your notifications');
        expect(wrapper.exists('.Notifications')).toBe(false);  // Verifica se .Notifications não é renderizado
    });

    it('div.Notifications is not displayed when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.exists('.Notifications')).toBe(false);
    });

    it('menu item is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').text()).toEqual('Your notifications');
    });

    it('div.Notifications is being displayed when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.exists('.Notifications')).toBe(true);
    });
});
