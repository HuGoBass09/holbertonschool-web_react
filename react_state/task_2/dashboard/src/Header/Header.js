import React, { Component } from 'react';
import img1 from '../assets/holberton-logo.jpg'
import { StyleSheet, css } from 'aphrodite'
import { AppContext } from '../App/AppContext';

export default class Header extends Component {

	static contextType = AppContext;

	render() {
		const { user, logOut } = this.context;

		return (
			<React.Fragment>
				<header className={css(styles.AppHeader)}>
					<div className={css(styles.headerContent)}>
						<img src={img1} alt="Logo" />
						<h1 className={css(styles.headerContentH1)}>School dashboard</h1>
					</div>
					<div className={css(styles.trait)}></div>
				</header>
				{user.isLoggedIn && (
					<p id='logoutSection'>
						Welcome {user.email}{' '}
						<a
							id="logoutclick"
							href="#"
							onClick={logOut}
						>
							(logout)
						</a>
					</p>
				)}
			</React.Fragment>
		)
	}
}

const styles = StyleSheet.create({
	AppHeader: {
		display: 'flex',
		justifyContent: 'LEFT',
		flexDirection: 'column'
	},

	headerContent: {
		display: 'flex',
		alignItems: 'center'
	},

	headerContentH1: {
		color: '#E0354B',
		fontSize: '50px'
	},

	trait: {
		borderBottom: '5px solid #E0354B',
		width: '100%',
		marginTop: '5px',
		marginBottom: '2em'
	}
});
