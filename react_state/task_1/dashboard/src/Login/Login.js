import React from 'react';
import { StyleSheet, css } from 'aphrodite';

//Import Aphrodite style
const styles = StyleSheet.create({
    app: {
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    },
    login: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        maxWidth: '600px',
        margin: '0 auto',
    },
    label: {
        fontSize: '18px',
        marginBottom: '3px',
    },
    input: {
        border: 'none',
        width: '100%',
        maxWidth: '400px',
    },
    button: {
        backgroundColor: 'white',
        border: '1px solid lightgrey',
        borderRadius: '5px',
        padding: '8px 16px',
        cursor: 'pointer',

    },
});

function Login() {
    return (
        <div className={css(styles.login)}>
            <div className={css(styles.formGroup)}>
                <label htmlFor="email" className={css(styles.label)}>Email:</label>
                <input type="email" id="email" name="email" className={css(styles.input)} />
            </div>
            <div className={css(styles.formGroup)}>
                <label htmlFor="password" className={css(styles.label)}>Password:</label>
                <input type="password" id="password" name="password" className={css(styles.input)} />
            </div>
            <button type="button" className={css(styles.button)}>OK</button>
        </div>
    );
}

export default Login;