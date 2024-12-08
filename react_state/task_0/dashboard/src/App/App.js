/* eslint-disable */
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import React, { Component } from "react";
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import WithLogging from '../HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },
  appBody: {
    padding: '20px',
    fontSize: '18px',
  },
  appFooter: {
    borderTop: '1px solid #E7E7E7',
    padding: '10px 0',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '60px',
    width: '100%',
    backgroundColor: '#fff',
  },
});

//Create listCourses and App class
//Define the default state for the state
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };

    this.listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    this.listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { isLoggedIn } = this.props;
    const { displayDrawer } = this.state;

    return (
      <>
        <Notifications listNotifications={this.listNotifications} displayDrawer={displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer} />
        <div className={css(styles.app)}>
          <Header />
        </div>
        <div className={css(styles.appBody)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>
              Cathy test with react
            </p>
          </BodySection>
        </div>
        <div className={css(styles.appFooter)}>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  logOut: () => { },
};
// Wrapping MyComponent with WithLogging
export default WithLogging(App);
