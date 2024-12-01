import React from 'react';
import PropTypes from 'prop-types';

// Pure NotificationItem Component using React.memo
const NotificationItem = React.memo(({ type, value, html, markAsRead, id }) => {
    const handleClick = () => {
        markAsRead(id);
    };

    if (html) {
        return (
            <li
                data-notification-type={type}
                dangerouslySetInnerHTML={html}
                onClick={handleClick}
            />
        );
    }
    return (
        <li
            data-notification-type={type}
            onClick={handleClick}
        >
            {value}
        </li>
    );
}, (prevProps, nextProps) => {
    return (
        prevProps.type === nextProps.type &&
        prevProps.value === nextProps.value &&
        prevProps.html === nextProps.html &&
        prevProps.id === nextProps.id
    );
});

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
    markAsRead: () => { },
    id: 0,

};

export default NotificationItem;