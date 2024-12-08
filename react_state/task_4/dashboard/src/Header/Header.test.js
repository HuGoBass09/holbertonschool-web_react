import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { userObject, defaultLogOut } from '../App/AppContext';
import { withContext } from 'shallow-with-context';

jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: () => ({}), // Mock de la création des styles
  },
  css: () => '', // Mock de l'utilisation de `css`
}));

describe('Header Component', () => {

  it('renders without crashing', () => {
    const contextValue = {
      user: userObject,
      logOut: defaultLogOut,
    };

    const HeaderWithContext = withContext(Header, contextValue);
      const wrapper = shallow(<HeaderWithContext />, { context: contextValue });

    expect(wrapper.exists()).toBe(true);
  });

  it('renders img and h1 elements with context', () => {
    const contextValue = {
      user: {
        email: 'test@example.com',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    const HeaderWithContext = withContext(Header, contextValue);
      const wrapper = shallow(<HeaderWithContext />, { context:contextValue });

      // Check if img and h1 elements are rendered
      expect(wrapper.find('img').length).toBe(1);
      expect(wrapper.find('h1').length).toBe(1);
    });
});

