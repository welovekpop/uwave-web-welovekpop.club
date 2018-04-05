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

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _List = require('material-ui/List');

var _Votes = require('./Votes');

var _Votes2 = _interopRequireDefault(_Votes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapTitle = function wrapTitle(title) {
  return (0, _jsx3.default)('span', {
    className: 'MobileMediaRow-title'
  }, void 0, title);
};

var HistoryRow = function HistoryRow(_ref) {
  var media = _ref.media;
  return (0, _jsx3.default)(_List.ListItem, {
    className: 'MobileMediaRow'
  }, void 0, (0, _jsx3.default)(_List.ListItemAvatar, {}, void 0, (0, _jsx3.default)(_Avatar2.default, {
    src: media.media.thumbnail,
    style: { borderRadius: 0 }
  })), (0, _jsx3.default)(_List.ListItemText, {
    primary: wrapTitle(media.media.title),
    secondary: media.media.artist
  }), _react2.default.createElement(_Votes2.default, media.stats));
};

HistoryRow.propTypes = process.env.NODE_ENV !== "production" ? {
  media: _propTypes2.default.object
} : {};

exports.default = HistoryRow;
//# sourceMappingURL=Row.js.map
//# sourceMappingURL=Row.js.map
