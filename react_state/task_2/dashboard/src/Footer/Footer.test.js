import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

// Mock pour Aphrodite pour empêcher l'injection de styles dans les tests
jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: () => ({}), // Mock de la création des styles
  },
  css: () => '', // Mock de l'utilisation de `css`
}));

describe('Footer Component', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.text()).toContain('Copyright');
  });

});
