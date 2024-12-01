import React from 'react';
import PropTypes from 'prop-types';


function NotificationItem({ type = 'default', value = '', html = undefined }) {
    if (html) {
        return <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>;
    }
    return <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>;
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number,
};

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: undefined,
    markAsRead: () => {},
    id: 0,

};

export default NotificationItem;