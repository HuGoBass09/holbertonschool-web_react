// NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';


describe('NotificationItem Component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render correct html from type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
        expect(wrapper.find('li').text()).toEqual('test');
    });

    it('should render correct html from html prop', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual({ __html: '<u>test</u>' });
    });

    it('should call markAsRead with the right ID argument when clicked', () => {
        const markAsReadSpy = jest.fn();
        const wrapper = shallow(
            <NotificationItem type="default" value="test" markAsRead={markAsReadSpy} id={1} />
        );

        wrapper.find('li').simulate('click');

        expect(markAsReadSpy).toHaveBeenCalledWith(1);
    });
});