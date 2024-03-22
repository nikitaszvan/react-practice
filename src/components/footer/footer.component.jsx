import React from 'react';
import './footer.styles.css';
import SocialIconContainer from '../social-icon-container/social-icon-container.component.jsx';
import FooterLinks from '../footer-links/footer-links.component.jsx';

const Footer = () => {
    const links = 
    [
        {
            link: 'Home', redirectTo: '/' 
        },
        {
            link: 'About', redirectTo: '/about' 
        },
        {
            link: 'Contact', redirectTo: '/contact' 
        }
    ];

    return (
    <div className="footer-section">
        <SocialIconContainer/>
        <FooterLinks links = { links }/>
        <p className='footer-trademark'></p>
    </div>
    )
}

export default Footer;