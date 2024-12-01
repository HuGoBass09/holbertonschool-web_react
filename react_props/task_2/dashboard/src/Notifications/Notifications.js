import React from 'react';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.jpg';
import NotificationItem from './NotificationItem';

function Notifications() {
    return (
    <div className="Notifications" style={{ position: 'relative' }}>
      <button
        style={{ position: 'absolute', right: '10px', top: '10px' }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="Close" />
      </button>
        <p>
            Here is the list of notifications
        </p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
        </ul>
    </div>
    );
}

export default Notifications;
