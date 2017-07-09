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

var _reactI18next = require('react-i18next');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentDJ = function CurrentDJ(_ref) {
  var t = _ref.t,
      className = _ref.className,
      dj = _ref.dj;
  return (0, _jsx3.default)('div', {
    className: className
  }, void 0, t('booth.currentDJ', { user: dj.username }));
};

CurrentDJ.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  dj: _propTypes2.default.shape({
    username: _propTypes2.default.string.isRequired
  })
} : {};

exports.default = (0, _reactI18next.translate)()(CurrentDJ);
//# sourceMappingURL=CurrentDJ.js.map
//# sourceMappingURL=CurrentDJ.js.map
