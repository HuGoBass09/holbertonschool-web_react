import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			enableSubmit: false
		};
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
	}

	handleLoginSubmit(event) {
		event.preventDefault();
		// Utiliser logIn du contexte
		const { logIn } = this.context;
		if (logIn) {
			logIn(this.state.email, this.state.password);
		} else {
			console.error('logIn function is not available in context');
		}
	}

	handleChangeEmail(event) {
		this.setState(
			{ email: event.target.value },
			() => {
				if (this.state.email != '' && this.state.password != '') {
					this.setState({ enableSubmit: true });
				}
				else {
					this.setState({ enableSubmit: false });
				}
			}
		);
	}

	handleChangePassword(event) {
		this.setState(
			{ password: event.target.value },
			() => {
				if (this.state.email != '' && this.state.password != '') {
					this.setState({ enableSubmit: true });
				}
				else {
					this.setState({ enableSubmit: false });
				}
			}
		);
	}

	render() {
		const { email, password, enableSubmit } = this.state;

		return (
					<div className="App-body">
						<div className="Login">
							<p className={css(styles.labelEmail)}>Login to access the full dashboard</p>
								<form className={css(styles.container)} onSubmit={this.handleLoginSubmit}>
								<div className={css(styles.formGroup)}>
									<label htmlFor="email" className='label_email'>Email:</label>
									<input
										className={css(styles.inputs)}
										type="email"
										id="email"
										name="email"
										value={email}
										onChange={this.handleChangeEmail}>
									</input>
									</div>
									<div className={css(styles.formGroup)}>
										<label htmlFor="password" className={css(styles.labelEmail)}>Password:</label>
										<input
											className={css(styles.inputs)}
											type="password"
											id="password"
											name="password"
											value={password}
											onChange={this.handleChangePassword}>
										</input>
									</div>
									<input
										disabled={!enableSubmit}
										type="submit"
										className={css(styles.button)}>
									</input>
								</form>
						</div>
					</div>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		'@media (max-width: 900px)': {
			flexDirection: 'column',
			justifyContent: 'left',
			marginBottom: '15px',
			alignItems: 'left',
		}
	},
	formGroup: {
		display: 'flex',
		flexDirection: 'row',
	},
	bodyText: {
		fontSize: '25px',
		marginLeft: '3em',
	},

	labelEmail: {
		'@media (max-width: 900px)': {
			marginLeft: '0em'
		},
		marginLeft: '4.5em'
	},

	labelPassword: {
		marginLeft: '1em'
	},

	inputs: {
		'@media (max-width: 900px)': {
			border: 'None'
		}
	},
	button: {
		'@media (max-width: 900px)': {
			border: '3px solid orange',
			backgroundColor: 'white',
			paddingLeft: '0.7em',
			paddingRight: '0.7em',
			width: '3em'
		}
	},

});

Login.contextType = AppContext;

export default Login;
