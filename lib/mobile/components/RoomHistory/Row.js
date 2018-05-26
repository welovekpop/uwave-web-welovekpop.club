"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemAvatar = _interopRequireDefault(require("@material-ui/core/ListItemAvatar"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Votes = _interopRequireDefault(require("./Votes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapTitle = function wrapTitle(title) {
  return (0, _jsx2.default)("span", {
    className: "MobileMediaRow-title"
  }, void 0, title);
};

var HistoryRow = function HistoryRow(_ref) {
  var media = _ref.media;
  return (0, _jsx2.default)(_ListItem.default, {
    className: "MobileMediaRow"
  }, void 0, (0, _jsx2.default)(_ListItemAvatar.default, {}, void 0, (0, _jsx2.default)(_Avatar.default, {
    src: media.media.thumbnail,
    style: {
      borderRadius: 0
    }
  })), (0, _jsx2.default)(_ListItemText.default, {
    primary: wrapTitle(media.media.title),
    secondary: media.media.artist
  }), _react.default.createElement(_Votes.default, media.stats));
};

HistoryRow.propTypes = process.env.NODE_ENV !== "production" ? {
  media: _propTypes.default.object
} : {};
var _default = HistoryRow;
exports.default = _default;
//# sourceMappingURL=Row.js.map
