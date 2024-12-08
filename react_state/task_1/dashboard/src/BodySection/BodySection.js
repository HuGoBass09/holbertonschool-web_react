import React from 'react';

const BodySection = ({title, children }) => {
    return (
        <div className="bodySection">
        <h2>{title}</h2>
        {children}
        </div>
    )
}

export default BodySection;