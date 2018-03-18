'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _logoWhite = require('../../../assets/img/logo-white.png');

var _logoWhite2 = _interopRequireDefault(_logoWhite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_arrowDropDown2.default, {});

var AppTitle = function AppTitle(_ref) {
  var className = _ref.className,
      hasAboutPage = _ref.hasAboutPage,
      children = _ref.children,
      onClick = _ref.onClick;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('AppTitle', className, hasAboutPage && 'AppTitle--hasAboutPage')
  }, void 0, (0, _jsx3.default)('h1', {
    className: 'AppTitle-logo'
  }, void 0, (0, _jsx3.default)('img', {
    className: 'AppTitle-logoImage',
    alt: children,
    src: _logoWhite2.default
  })), hasAboutPage && (0, _jsx3.default)(_IconButton2.default, {
    className: 'AppTitle-button',
    onClick: onClick
  }, void 0, _ref2));
};

AppTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  hasAboutPage: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired
} : {};

exports.default = AppTitle;
//# sourceMappingURL=AppTitle.js.map
//# sourceMappingURL=AppTitle.js.map
