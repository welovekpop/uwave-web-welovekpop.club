"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "PlaylistMenuRow-active-icon"
}, void 0, (0, _jsx2.default)(_Search.default, {}));

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_Close.default, {
  nativeColor: "#777"
});

var SearchResultsRow = function SearchResultsRow(_ref) {
  var className = _ref.className,
      query = _ref.query,
      onClick = _ref.onClick,
      onClose = _ref.onClose;
  return (0, _jsx2.default)(_ListItem.default, {
    role: "menuitem",
    className: (0, _classnames.default)('PlaylistMenuRow', 'PlaylistMenuRow--search', className)
  }, void 0, (0, _jsx2.default)("button", {
    className: "PlaylistMenuRow-title",
    onClick: onClick
  }, void 0, _ref2, "\"", query, "\""), (0, _jsx2.default)("div", {
    className: "PlaylistMenuRow-count"
  }, void 0, (0, _jsx2.default)(_IconButton.default, {
    className: "PlaylistMenuRow-closeButton",
    onClick: onClose
  }, void 0, _ref3)));
};

SearchResultsRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  query: _propTypes.default.string,
  onClick: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func.isRequired
} : {};
var _default = SearchResultsRow;
exports.default = _default;
//# sourceMappingURL=SearchResultsRow.js.map
