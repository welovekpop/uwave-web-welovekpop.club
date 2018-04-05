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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaRow = function MediaRow(_ref) {
  var media = _ref.media;
  return (0, _jsx3.default)(_List.ListItem, {
    className: 'MobileMediaRow'
  }, void 0, (0, _jsx3.default)(_Avatar2.default, {
    src: media.thumbnail,
    style: { borderRadius: 0 }
  }), (0, _jsx3.default)(_List.ListItemText, {
    primary: media.title,
    secondary: media.artist
  }));
};

MediaRow.propTypes = process.env.NODE_ENV !== "production" ? {
  media: _propTypes2.default.object
} : {};

exports.default = MediaRow;
//# sourceMappingURL=Row.js.map
//# sourceMappingURL=Row.js.map
