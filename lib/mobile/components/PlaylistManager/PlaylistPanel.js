"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MediaList = _interopRequireDefault(require("../MediaList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaylistPanel = function PlaylistPanel(_ref) {
  var items = _ref.items;
  return (0, _jsx2.default)("div", {
    className: "PlaylistPanel"
  }, void 0, (0, _jsx2.default)(_MediaList.default, {
    className: "PlaylistPanel-media",
    media: items
  }));
};

PlaylistPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  items: _propTypes.default.array.isRequired
} : {};
var _default = PlaylistPanel; //# sourceMappingURL=PlaylistPanel.js.map

exports.default = _default;
//# sourceMappingURL=PlaylistPanel.js.map
