import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	  }

	  static contextType = AppContext;

	  markAsRead(id) {
		const { markNotificationAsRead } = this.context;
		markNotificationAsRead(id);
	}

	render() {
		const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;

	const handleClick = () => {
		console.log('Close button has been clicked');
	};

	return (
		<React.Fragment>
			{!displayDrawer && (
          <div data-testid='menuItem' className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
            Your notifications
          </div>
        )}
			{displayDrawer && (
				<div className={css(styles.notifications)} data-testid="notifications">
					{listNotifications && listNotifications.length > 0 && (
						<p className={css(styles.text)}>Here is the list of notifications</p>
					)}
					<button data-testid='close-button' onClick={() => { handleHideDrawer(); handleClick(); }} className={css(styles.closeButton)} aria-label='Close'>X</button>
					<ul className={css(styles.list)}>
						{listNotifications.length > 0 ? (
							listNotifications.map(({ id, html, type, value }) => (
								<NotificationItem
									key={id}
									id={id}
									html={html}
									type={type}
									value={value}
									markAsRead={() => this.markAsRead(id)}
								/>
							))
						) : (
							<li>No new notification for now</li>
						)}
					</ul>
				</div>
			)}
		</React.Fragment>
	);
}
}

const opacityChange = {
	'0%': { opacity: 0.5 },
	'100%': { opacity: 1 },
  };

  const bounce = {
	'0%': { transform: 'translateY(0px)' },
	'50%': { transform: 'translateY(-5px)' },
	'100%': { transform: 'translateY(5px)' },
  };

const styles = StyleSheet.create({
	notifications: {
		border: '3px dashed red',
		padding: '10px',
		position: 'absolute',
		marginTop: '1em',
		right: '0',
		width: '33.33%',
		height: '20vh',
		boxSizing: 'border-box',
		'@media (max-width: 900px)': {
		position: 'fixed',
		top: -5,
		left: 0,
		right: 0,
		bottom: 0,
		width: '100vw',
		height: '100vh',
		backgroundColor: 'white',
		zIndex: 1000,
		border: 'None',
		padding: '0px',
		}
	},

	menuItem: {
		position: 'fixed',
		right: '0',
		backgroundColor: '#fff8f8',
		padding: '10px',
		cursor: 'pointer',
		':hover': {
		  animationName: [opacityChange, bounce],
		  animationDuration: '1s, 0.5s',
		  animationIterationCount: '3, 3',
		  animationTimingFunction: 'ease-in-out',
		},
	  },

	closeButton: {
		position: 'absolute',
		top: '10px',
		right: '10px',
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		fontSize: '16px',
	},

	text: {
		'@media (max-width: 900px)': {
		fontSize: '20px',
		}
	},

	list: {
		'@media (max-width: 900px)': {
		paddingLeft: '0',
		}
	}
});


Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func,
	markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
	handleDisplayDrawer: () => {},
	handleHideDrawer: () => {},
	markNotificationAsRead: () => {},
};

export default Notifications;
