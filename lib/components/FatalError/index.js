'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reload() {
  window.location.reload();
}

var _ref2 = (0, _jsx3.default)(_Typography2.default, {
  variant: 'headline'
}, void 0, '\xFCWave Crashed');

var _ref3 = (0, _jsx3.default)(_Typography2.default, {
  component: 'p'
}, void 0, 'The admins have been made aware of this issue. Please reload the page.');

var _ref4 = (0, _jsx3.default)(_Card.CardActions, {}, void 0, (0, _jsx3.default)(_Button2.default, {
  variant: 'raised',
  color: 'secondary',
  className: 'FatalError-reload',
  onClick: reload,
  autoFocus: true
}, void 0, 'Reload'));

var FatalError = function FatalError(_ref) {
  var error = _ref.error;
  return (0, _jsx3.default)('div', {
    className: 'FatalError'
  }, void 0, (0, _jsx3.default)(_Card2.default, {
    raised: true,
    className: 'FatalError-paper'
  }, void 0, (0, _jsx3.default)(_Card.CardContent, {}, void 0, _ref2, (0, _jsx3.default)(_Typography2.default, {
    component: 'p'
  }, void 0, error.message), _ref3), _ref4));
};

FatalError.propTypes = process.env.NODE_ENV !== "production" ? {
  error: _propTypes2.default.object.isRequired
} : {};

exports.default = FatalError;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
