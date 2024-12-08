import React from 'react'
import { getFullYear, getFooterCopy } from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';

export default function Footer() {
	return (
		<footer className={css(styles.appFooter)}>
		<div className={css(styles.trait)}></div>
		Copyright {getFullYear()} - {getFooterCopy(true)}
		</footer>
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
