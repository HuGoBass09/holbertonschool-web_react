import React from 'react'
import { getFullYear, getFooterCopy } from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

export default function Footer() {
	return (
		<AppContext.Consumer>
      {({ user }) => (
		<footer className={css(styles.appFooter)}>
			<div className={css(styles.trait)}></div>
			Copyright {getFullYear()} - {getFooterCopy(true)}
			{user.isLoggedIn && (
				<p>
					<a href="/contact">Contact us</a>
				</p>
			)}
		</footer>
	  )}
		</AppContext.Consumer>
	);
}

const styles = StyleSheet.create({
	appFooter: {
		fontStyle: 'italic',
		textAlign: 'center',
		fontSize: '25px'
	},

	trait: {
		borderBottom: '5px solid #E0354B',
		width: '100%',
		marginTop: '5px',
		marginBottom: '2em'
	}

});
