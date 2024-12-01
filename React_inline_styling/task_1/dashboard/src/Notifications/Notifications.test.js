import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications'
import NotificationItem from './NotificationItem';
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const htmlObj = {
  __html: getLatestNotification(),
};
const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: htmlObj},
];

describe('<Notifications />', () => {
  it('renders an <Notifications /> component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toHaveLength(1);
	});

  it('render a Notifications component and check for 3 items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
	});

  it('render a Notificationscomponent and verify text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('.Notifications p')).toHaveLength(1);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications')
	});

  it('render a Notifications component and verify html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">New course available</li>')
	});

  it('ensure .menuItem is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
	});

  it('ensure div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
	});

  it('ensure .menuItem is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
	});

  it('ensure div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
	});

  it('verify that Notifications render correctly', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    const wrapperTwo = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapperTwo.find('.Notifications')).toHaveLength(1);
	});

  it('verify that when you pass a list of notifications, the component render it correctly', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
	});

  it('verify the console.log output when calling the function markAsRead', () => {
    const spy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const instance = wrapper.instance();
    instance.markAsRead(1);
    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  });

  it('verify that when updating the props of the component with the same list, the component doesn’t rerender', () => {
    const spy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.setProps({
      listNotifications: []
    });
    expect(spy).toHaveReturnedWith(false);
    spy.mockRestore();
  });

  it('verify that when updating the props of the component with a longer list, the component does rerender', () => {
    const spy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.setProps({
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New majors available" },
      ]
    });
    expect(spy).toHaveReturnedWith(true);
    spy.mockRestore();
  });
});