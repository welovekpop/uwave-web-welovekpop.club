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

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _ms = require('ms');

var _ms2 = _interopRequireDefault(_ms);

var _timed = require('../../utils/timed');

var _timed2 = _interopRequireDefault(_timed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Bit weird to do it like this perhaps, convert to an english string first and
// then translate afterwards.
function translateMs(str) {
  // `ms` output of the form "3 hours"
  var _str$split = str.split(' '),
      count = _str$split[0],
      key = _str$split[1];

  return {
    key: key.replace(/s$/, '') + 's',
    count: parseInt(count, 10)
  };
}

var TimeAgo = function TimeAgo(_ref) {
  var t = _ref.t,
      currentTime = _ref.currentTime,
      timestamp = _ref.timestamp;

  var secondsAgo = Math.max(0, Math.floor((currentTime - timestamp) / 1000));
  var msString = (0, _ms2.default)(secondsAgo * 1000, { long: true });

  var _translateMs = translateMs(msString),
      key = _translateMs.key,
      count = _translateMs.count;

  return (0, _jsx3.default)('span', {}, void 0, t('timeAgo.format', {
    time: t('timeAgo.' + key, {
      count: count,
      defaultValue: msString
    })
  }));
};

TimeAgo.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  currentTime: _propTypes2.default.number.isRequired,
  timestamp: _propTypes2.default.number.isRequired
} : {};

exports.default = (0, _compose2.default)((0, _reactI18next.translate)(), (0, _timed2.default)())(TimeAgo);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
