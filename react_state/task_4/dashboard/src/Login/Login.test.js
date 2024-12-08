import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: () => ({}), // Mock de la création des styles
  },
  css: () => '', // Mock de l'utilisation de `css`
}));

describe('Login Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 2 input and label tags', () => {

    expect(wrapper.find('input').length).toBe(3);

    expect(wrapper.find('label').length).toBe(2);
  });

  it('should disable the submit button by default', () => {
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('should enable the submit button when email and password inputs are filled', () => {
    // Simuler le changement de l'input email
    wrapper.find('input[type="email"]').simulate('change', {
      target: { value: 'test@example.com' }
    });

    // Simuler le changement de l'input password
    wrapper.find('input[type="password"]').simulate('change', {
      target: { value: 'password123' }
    });

    // Vérifie que le bouton "Submit" est maintenant activé
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });

});
