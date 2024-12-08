import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { AppContext } from '../App/AppContext';

jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: () => ({}),
  },
  css: () => '',
}));

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, html: { __html: getLatestNotification() }, type: "urgent" }
];

describe('Notifications Component with listNotifications', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  });

  // Test that the component renders three list items
  it('renders three list items', () => {
    expect(wrapper.find('NotificationItem').length).toBe(3);
  });

  // Test that the component renders the text "Here is the list of notifications"
  it('renders the text "Here is the list of notifications"', () => {
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });

  it('renders the first NotificationItem with the correct HTML', () => {
    const firstNotificationItem = wrapper.find('NotificationItem').at(0);

    // On accède au premier NotificationItem et on vérifie son contenu HTML
    expect(firstNotificationItem.html()).toContain('<li class="\" data-notification-type="default">New course available</li>');
  });

  it('should display the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Your notifications');
  });

  it('should not display the Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications').length).toBe(0);
  });

  it('renders list of notifications correctly and with the right number of NotificationItem', () => {
    expect(wrapper.find('NotificationItem').length).toBe(3);
    expect(wrapper.find('NotificationItem').at(0).props()).toEqual({
      type: 'default',
      value: 'New course available',
      html: undefined,
      id: 1,
      markAsRead: expect.any(Function),

    });

    expect(wrapper.find('NotificationItem').at(1).props()).toEqual({
      type: 'urgent',
      value: 'New resume available',
      html: undefined,
      id: 2,
      markAsRead: expect.any(Function),
    });

    expect(wrapper.find('NotificationItem').at(2).props()).toEqual({
      type: 'urgent',
      html: { __html: getLatestNotification() },
      id: 3,
      markAsRead: expect.any(Function),
    });
  });

  describe('Notifications Component without listNotifications', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} />);
    });

    // Test that Notifications renders without crashing
    it('renders Notifications without crashing', () => {
    });

    it('should not display the menu item when displayDrawer is true', () => {
      expect(wrapper.text()).not.toContain('Your notifications');
    });

    it('should display the Notifications when displayDrawer is true', () => {
      expect(wrapper.find('[data-testid="notifications"]').length).toBe(1);
    });
  })

  describe('Notifications Component with listNotifications empty', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    });
    it('should not display the message "Here is the list of notifications" if listNotifications is empty, but "No new notification for now"', () => {
      expect(wrapper.contains(<li>No new notification for now</li>)).toBe(true);
      expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(false);
    });
    it('should render correctly if you pass an empty array or if you dont pass the listNotifications property', () => {
      expect(wrapper.contains(<li>No new notification for now</li>)).toBe(true);
    });
  })
})

describe('Notifications component', () => {
  let contextValue;

  beforeEach(() => {
    contextValue = {
      markNotificationAsRead: jest.fn(),
    };
  });

  it('should not re-render when updating with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];

    // Spy on the render method
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Notifications displayDrawer={true} listNotifications={listNotifications} />
      </AppContext.Provider>
    );

    // Update props with the same list
    wrapper.setProps({ listNotifications });

    // Check that the render method was called only once
    expect(renderSpy).toHaveBeenCalledTimes(1);

    renderSpy.mockRestore();
  });

  it('should re-render when updating with a longer list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];

    const newListNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', value: 'New notification' }
    ];

    // Spy on the render method
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Notifications displayDrawer={true} listNotifications={listNotifications} />
      </AppContext.Provider>
    );

    // Update props with a new listNotifications reference
    wrapper.setProps({ listNotifications: [...newListNotifications] });

    // Check that the render method was called twice
    expect(renderSpy).toHaveBeenCalledTimes(1);

    renderSpy.mockRestore();
  });

describe('Notifications component tests', () => {
  it('should call handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={jest.fn()}
      />
    );

    // Simuler le clic sur le menu des notifications
    wrapper.find('[data-testid="menuItem"]').simulate('click');

    // Vérifier que la fonction mock est appelée
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });
});

  it('should call handleHideDrawer when clicking on the button', () => {
    const handleHideDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleHideDrawer={handleHideDrawerMock}
        handleDisplayDrawer={jest.fn()}
      />
    );

    wrapper.find('[data-testid="close-button"]').simulate('click');

    expect(handleHideDrawerMock).toHaveBeenCalled();
  });
});
