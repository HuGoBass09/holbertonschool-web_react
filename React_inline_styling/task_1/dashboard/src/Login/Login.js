import React from "react";
import { css, StyleSheet } from 'aphrodite';


const styles = StyleSheet.create({
  bodyLogin: {
    margin: '50px 0 300px 0px',
    flexGrow: 1
  },
  bodyLoginInput: {
    margin: '0 10px 0 0px'
  }
})

function Login() {
  return (
    <div className='body-login'>
      <div className={css(styles.bodyLogin)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="fname">Email:</label>
        <input type="email" id="email" className={css(styles.bodyLoginInput)}/>
        <label htmlFor="lname">Password:</label>
        <input type="password" id="password" className={css(styles.bodyLoginInput)}/>
        <button>OK</button>
      </div>
    </div>
  );
}

export default Login;
