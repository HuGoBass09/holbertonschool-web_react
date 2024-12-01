// Testing well working notifications

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe("<Notifications Component/>", () => {
    it("Notifications renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    });
    it("Notifications renders Notification Item and first item has correct html", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const listItems = wrapper.find("NotificationItem");
        expect(listItems).toBeDefined();
        expect(listItems.first().html()).toEqual(
            '<li data-notification-type="default">New course available</li>'
        );
    });
    it("menu item is being displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const item = wrapper.find("div.menuItem");
        expect(item).toHaveLength(1);
    });
    it("div.Notifications is not being displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const item = wrapper.find("div.Notifications");
        expect(item).toHaveLength(0);
    });
    it("menu item is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const item = wrapper.find("div.menuItem");
        expect(item).toHaveLength(1);
    });
    it("div.Notifications is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const item = wrapper.find("div.Notifications");
        expect(item).toHaveLength(1);
    });
    it('should call console.log with the right message when markAsRead is called', () => {
    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance();

    // Mock console.log
    console.log = jest.fn();

    // Call markAsRead with an ID
    instance.markAsRead(1);

    // Check if console.log was called with the right message
    expect(console.log).toHaveBeenCalledWith('Notification 1 has been marked as read');
    });
});