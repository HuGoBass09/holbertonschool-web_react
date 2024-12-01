import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App', () => {
  it('contains Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Notifications />)).toEqual(true);
  });

  it('contains Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('contains Login component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
  });

  it('contains Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });

  it('does not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.containsMatchingElement(<CourseList />)).toEqual(false);
  });

  describe('when isLoggedIn is true', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('does not include the Login component', () => {
      expect(wrapper.containsMatchingElement(<Login />)).toEqual(false);
    });

    it('includes the CourseList component', () => {
      expect(wrapper.containsMatchingElement(<CourseList />)).toEqual(true);
    });
  });
});