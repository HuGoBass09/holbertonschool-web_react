// Create notifications elements

import React, { Component } from "react";
import { getLatestNotification } from '../utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import closeIcon from "../assets/close-icon.png";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;
        return (
            <>
                <div className="menuItem">
                    <p>Your notifications</p>
                </div>
                {displayDrawer && (
                    <div className="Notifications">
                        <button
                            style={{
                                background: "transparent",
                                border: "none",
                                position: "absolute",
                                right: 20,
                            }}
                            aria-label="close"
                        >
                            <img src={closeIcon} alt="close-icon" />
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul>
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
        displayDrawer: PropTypes.bool,
        listNotifications: PropTypes.arrayOf(NotificationItemShape),
    };

Notifications.defaultProps = {
        displayDrawer: false,
        listNotifications: [],
    };
export default Notifications;