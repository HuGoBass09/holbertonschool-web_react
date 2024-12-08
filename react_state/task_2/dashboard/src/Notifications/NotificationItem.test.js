import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: () => ({}), // Mock de la création des styles
  },
  css: () => '', // Mock de l'utilisation de `css`
}));

describe('NotificationItem Component', () => {

  // Test that NotificationItem renders without crashing
  it('renders NotificationItem without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders correctly with type="default" and value="test"', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    // Vérifie que l'élément li a l'attribut data-notification-type avec la valeur "default"
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
    // Vérifie que l'élément li contient le texte "test"
    expect(wrapper.find('li').text()).toBe('test');
  });

  it('renders correctly with html={{ __html: "<u>test</u>" }}', () => {
    const htmlProp = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={htmlProp} />);
    // Vérifie que l'élément li a le HTML attendu
    expect(wrapper.find('li').html()).toContain('<u>test</u>');
  });

});

describe('NotificationItem Component', () => {
  it('calls markAsRead with the correct ID when clicked', () => {
    // Step 1: Create a spy for markAsRead
    const markAsReadSpy = jest.fn();

    // Step 2: Render the component with the spy passed as the markAsRead prop
    const wrapper = shallow(
      <NotificationItem
        id={1}
        type="default"
        value="New course available"
        markAsRead={markAsReadSpy}
      />
    );

    // Step 3: Simulate a click event on the <li> element
    wrapper.find('li').simulate('click');

    // Step 4: Check that the spy was called with the correct ID
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });
});
