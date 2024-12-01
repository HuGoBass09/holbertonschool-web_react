import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';


function Footer() {
    return (
    <footer className="footer">
        <em><p>{`© Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p></em>
    </footer>
    )
};

export default Footer;
