import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

const buttonProps = {
  style: { WebkitAppearance: 'initial' },
  target: '_blank',
};

const SocialMediaLink = ({ href, label, children }) => (
  <li className="wlk-AboutPage-socialMedia">
    <FlatButton
      {...buttonProps}
      href={href}
      label={label}
      icon={children}
    />
  </li>
);

SocialMediaLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default SocialMediaLink;
