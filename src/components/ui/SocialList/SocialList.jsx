import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialList = ({ className }) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a href="https://www.linkedin.com/in/prathamesh-kadve-9948ba232/" target="_blank">
        <FontAwesomeIcon className="size-6 text-primaryhead" icon={faLinkedin} />
      </a>
      <a href="https://github.com/prathameshdk02" target="_blank">
        <FontAwesomeIcon className="size-6 text-primaryhead" icon={faGithub} />
      </a>
      <a href="https://x.com/prathameshdk02" target="_blank">
        <FontAwesomeIcon className="size-6 text-primaryhead" icon={faTwitter} />
      </a>
    </div>
  );
};

export default SocialList;
