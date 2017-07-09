import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';

var buttonProps = {
  style: { WebkitAppearance: 'initial' },
  target: '_blank'
};

var SocialMediaLink = function SocialMediaLink(_ref) {
  var href = _ref.href,
      label = _ref.label,
      children = _ref.children;
  return _jsx('li', {
    className: 'wlk-AboutPage-socialMedia'
  }, void 0, React.createElement(FlatButton, _extends({}, buttonProps, {
    href: href,
    label: label,
    icon: children
  })));
};

SocialMediaLink.propTypes = process.env.NODE_ENV !== "production" ? {
  href: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired
} : {};

export default SocialMediaLink;
//# sourceMappingURL=SocialMediaLink.js.map
