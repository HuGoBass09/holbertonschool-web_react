import React, { cloneElement } from "react";
import { css, StyleSheet } from 'aphrodite';
import holberton_logo from "../assets/holberton_logo.jpg";


const styles = StyleSheet.create({
  header: {
    display: "flex",
    color: '#e14852',
    alignItems: "center"
  },
  headerLogo: {
    width: '200px',
    height: '200px'
  }
})

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={holberton_logo} className={css(styles.headerLogo)} alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;
