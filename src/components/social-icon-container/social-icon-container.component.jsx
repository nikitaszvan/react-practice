import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './social-icon-container.styles.css';

const SocialIconContainer = () => {

    const platforms = [faFacebook, faInstagram, faTwitter];
    return (
        <div className="social-icon-container">
            {platforms.map((Icon, index) => (
                <FontAwesomeIcon icon={Icon} key={index} />
            ))}
        </div>
    );
}

export default SocialIconContainer;