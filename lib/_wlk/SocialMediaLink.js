'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonProps = {
  style: { WebkitAppearance: 'initial' },
  target: '_blank'
};

var SocialMediaLink = function SocialMediaLink(_ref) {
  var href = _ref.href,
      label = _ref.label,
      children = _ref.children;
  return (0, _jsx3.default)('li', {
    className: 'wlk-AboutPage-socialMedia'
  }, void 0, React.createElement(_FlatButton2.default, (0, _extends3.default)({}, buttonProps, {
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

exports.default = SocialMediaLink;
//# sourceMappingURL=SocialMediaLink.js.map
//# sourceMappingURL=SocialMediaLink.js.map
