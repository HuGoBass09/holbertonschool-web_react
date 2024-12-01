import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App', () => {
  it('contains Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Notifications />)).toEqual(true);
  });

  it('contains Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('contains Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
  });

  it('contains Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
});