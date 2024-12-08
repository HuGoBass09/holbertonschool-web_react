// Create 4 tests to see if App renders a div

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe("<App />", () => {
    it("App renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toEqual(true);
    });

    // Import Notification component
    it('contains the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications).length).toBe(1);
    });

    // Import Header component
    it('contains the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header).length).toBe(1);
    });

    // Import Login component
    it('contains the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login).length).toBe(1);
    });

    // Import Footer component
    it('contains the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer).length).toBe(1);
    });

    // Check if Login component is rendered when isLoggedIn is false
    it('contains the Login component when isLoggedIn is false', () => {
        const wrapper = shallow(<App isLoggedIn={false} />);
        expect(wrapper.find(Login).length).toBe(1);
        expect(wrapper.find(CourseList).length).toBe(0);
    });

    // Check if CourseList component is rendered when isLoggedIn is true
    describe('when isLoggedIn is true', () => {
        it('does not include the Login component', () => {
            const wrapper = shallow(<App isLoggedIn={true} />);
            expect(wrapper.find(Login).length).toBe(0);
        });

        it('includes the CourseList component', () => {
            const wrapper = shallow(<App isLoggedIn={true} />);
            expect(wrapper.find(CourseList).length).toBe(1);
        });
    });

    // Check if LogOut component is rendering when pressing keys Control and H
    it('calls logOut function and shows alert when Control + H is pressed', () => {
        const logOutMock = jest.fn();
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });
        const wrapper = shallow(<App logOut={logOutMock} />);

        // Simulate the keydown event
        const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
        document.dispatchEvent(event);

        expect(alertMock).toHaveBeenCalledWith('Logging you out');
        expect(logOutMock).toHaveBeenCalled();

        // Clean up
        alertMock.mockRestore();
    });

    // Test to verify the default state for displayDrawer is false
    it('sets the default state for displayDrawer to false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('displayDrawer')).toBe(false);
    });

    // Test to verify handleDisplayDrawer changes displayDrawer state to true
    it('updates state to displayDrawer true after calling handleDisplayDrawer', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer();  // Call handleDisplayDrawer
        expect(wrapper.state('displayDrawer')).toBe(true);
    });

    // Test to verify handleHideDrawer changes displayDrawer state to false
    it('updates state to displayDrawer false after calling handleHideDrawer', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer();  // First, set it to true
        expect(wrapper.state('displayDrawer')).toBe(true);  // Verify it's true
        wrapper.instance().handleHideDrawer();  // Then, call handleHideDrawer
        expect(wrapper.state('displayDrawer')).toBe(false);
    });
});

describe("<Notifications />", () => {
    // Test to verify handleDisplayDrawer is called when clicking on the menu item
    it('calls handleDisplayDrawer when clicking on the menu item', () => {
        const handleDisplayDrawer = jest.fn();
        const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
        wrapper.find('div.menuItem').simulate('click');  // Simulate click
        expect(handleDisplayDrawer).toHaveBeenCalled();  // Ensure the function is called
    });

    // Test to verify handleHideDrawer is called when clicking on the close button
    it('calls handleHideDrawer when clicking on the close button', () => {
        const handleHideDrawer = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer handleHideDrawer={handleHideDrawer} />);
        wrapper.find('button[aria-label="close"]').simulate('click');  // Simulate click
        expect(handleHideDrawer).toHaveBeenCalled();  // Ensure the function is called
    });
});
