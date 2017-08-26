import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const buttonProps = {
  style: { WebkitAppearance: 'initial' },
  target: '_blank'
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
  href: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired
};

export default SocialMediaLink;
