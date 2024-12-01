import React from 'react';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.jpg'

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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} data-priority="urgent"></li>
      </ul>
    </div>
    )
}

export default Notifications;
