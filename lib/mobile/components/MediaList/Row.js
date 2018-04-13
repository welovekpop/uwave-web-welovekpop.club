"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("material-ui/Avatar"));

var _List = require("material-ui/List");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaRow = function MediaRow(_ref) {
  var media = _ref.media;
  return (0, _jsx2.default)(_List.ListItem, {
    className: "MobileMediaRow"
  }, void 0, (0, _jsx2.default)(_Avatar.default, {
    src: media.thumbnail,
    style: {
      borderRadius: 0
    }
  }), (0, _jsx2.default)(_List.ListItemText, {
    primary: media.title,
    secondary: media.artist
  }));
};

MediaRow.propTypes = process.env.NODE_ENV !== "production" ? {
  media: _propTypes.default.object
} : {};
var _default = MediaRow; //# sourceMappingURL=Row.js.map

exports.default = _default;
//# sourceMappingURL=Row.js.map
