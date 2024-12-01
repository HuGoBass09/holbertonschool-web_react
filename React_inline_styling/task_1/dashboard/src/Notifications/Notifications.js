import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from 'aphrodite';
import NotificationItem from "./NotificationItem";
import closeButton from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape";

const styles = StyleSheet.create({
  notifications: {
    border: '3px dashed #e14852',
    padding: '1em',
    float: 'right',
    margin: '10px 30px 0 0'
  },
  menuItem: {
    textAlign: 'right',
    marginRight: '30px'
  },
  notificationsButtonImage: {
    width: '20px'
  }
})


class Notifications extends React.Component {
  constructor (props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this)
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
      )
  }
  
  render () { 
    return (
      <>
        <div className='menuItem'><div className={css(styles.menuItem)}>Your notifications</div></div>
    
        { this.props.displayDrawer ? 
          (<div className='Notifications'>
            <div className={css(styles.notifications)}>
              <button
                style={{
                  right: 45,
                  border: "none",
                  position: "absolute",
                  background: "transparent",
                }}
                aria-label="close"
                onClick={() => console.log("Close button has been clicked")}
              >
              <img src={closeButton} className={css(styles.notificationsButtonImage)} alt="close button icon" />
              </button>
              <p>Here is the list of notifications</p>
              <ul>
                {this.props.listNotifications.length === 0 ? (<NotificationItem value='No new notification for now' type='no-new' />) : <></>}
                {this.props.listNotifications.map((not) => (<NotificationItem key={not.id} type={not.type} value={not.value} html={not.html} markAsRead={() => {this.markAsRead(not.id)}} />))}
              </ul>
            </div>
          </div>)
             
          : <></>
        }
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;