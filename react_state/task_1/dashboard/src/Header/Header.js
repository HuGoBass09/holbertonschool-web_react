import React from 'react';
import logo from '../Holberton Logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  const styles = StyleSheet.create({
    appHeader: {
      backgroundColor: '#fff',
      minHeight: '20vh',
      display: 'flex',
      alignItems: 'center',
      fontSize: 'calc(10px + 2vmin)',
      borderBottom: '5px solid rgb(233, 53, 53)',
      color: 'rgb(233, 53, 53)',
    },
    appLogo: {
      height: '300px',
      width: 'auto',
      marginRight: '20px',
      objectFit: 'contain',
    },
    headerContainer: {
      textAlign: 'center',
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    },
  });

  return (
    <div className={css(styles.headerContainer)}>
      <header className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appLogo)} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      </div>
  )
}

export default Header;
