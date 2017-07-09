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

var _reactI18next = require('react-i18next');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GuestsRow = function GuestsRow(_ref) {
  var t = _ref.t,
      className = _ref.className,
      guests = _ref.guests;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('UserRow', 'UserRow--guests', className)
  }, void 0, t('users.guests', { count: guests }));
};

GuestsRow.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  guests: _propTypes2.default.number.isRequired
} : {};

exports.default = (0, _reactI18next.translate)()(GuestsRow);
//# sourceMappingURL=GuestsRow.js.map
//# sourceMappingURL=GuestsRow.js.map
