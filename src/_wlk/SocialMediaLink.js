import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const SocialMediaLink = ({ href, label, children }) => (
  <li className="wlk-AboutPage-socialMedia">
    <Button target="_blank" href={href}>
      <span className="wlk-AboutPage-socialMediaIcon">{children}</span>
      {label}
    </Button>
  </li>
);

SocialMediaLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default SocialMediaLink;
