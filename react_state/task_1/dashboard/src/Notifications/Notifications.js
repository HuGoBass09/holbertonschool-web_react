// Create notifications elements

import React, { Component } from "react";
import NotificationItem from './NotificationItem';
import closeIcon from "../assets/close-icon.png";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    menuItem: {
        textAlign: "right",
        marginBottom: "10px",
        cursor: 'pointer',
    },
    notifications: {
        border: "1px dashed rgb(233, 53, 53)",
        padding: "10px",
        margin: "10px 0",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        zIndex: 1000,
        display: "block",
        fontSize: "20px",
    },
    closeButton: {
        background: "transparent",
        border: "none",
        position: "absolute",
        right: 20,
        top: 5,
        cursor: "pointer",
    },
    closeIcon: {
        width: "10px",
    },
    notificationList: {
        margin: 0,
        padding: 0,
        listStyle: "none",
    },
    defaultItem: {
        color: "blue",
    },
    urgentItem: {
        color: "red",
    },
});

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDrawer: false,
        };
        this.markAsRead = this.markAsRead.bind(this);
        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);  // Bind methods
        this.handleHideDrawer = this.handleHideDrawer.bind(this);
    }

    handleDisplayDrawer() {
        this.setState({ displayDrawer: true });
    }

    handleHideDrawer() {
        this.setState({ displayDrawer: false });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextState.displayDrawer !== this.state.displayDrawer ||
        nextProps.listNotifications.length > this.props.listNotifications.length
        );
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { listNotifications } = this.props;
        const { displayDrawer } = this.state;

        return (
            <>
                <div className={css(styles.menuItem)} onClick={this.handleDisplayDrawer}>
                    <p>Your notifications</p>
                </div>
                {displayDrawer && (
                    <div className={css(styles.notifications)}>
                        <button
                            className={css(styles.closeButton)}
                            aria-label="close"
                            onClick={this.handleHideDrawer}
                        >
                            <img src={closeIcon} alt="close-icon" className={css(styles.closeIcon)} />
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul className={css(styles.notificationList)}>
                            {listNotifications.length === 0 ? (
                                <NotificationItem type="default" value="No new notification for now" markAsRead={this.markAsRead} />
                            ) : (
                                listNotifications.map((notification) => (
                                    <NotificationItem
                                        key={notification.id}
                                        id={notification.id}
                                        type={notification.type}
                                        value={notification.value}
                                        html={notification.html}
                                        markAsRead={this.markAsRead}
                                    />
                                ))
                            )}
                        </ul>
                    </div>
                )}
            </>
        );
    }
}

Notifications.propTypes = {
    listNotifications: PropTypes.arrayOf(NotificationItemShape).isRequired,
    displayDrawer: PropTypes.bool,
    handleDisplayDrawer: PropTypes.func.isRequired,
    handleHideDrawer: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
    listNotifications: [],
    displayDrawer: false,
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
};

export default Notifications;
