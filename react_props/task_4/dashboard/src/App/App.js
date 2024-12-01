import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';

function App({ isLoggedIn }) {
  return (
    <>
    
      <div className="App">
      <Notifications displayDrawer ={false}/>
        <Header />
      
        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <Footer />
      </div>
      
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;