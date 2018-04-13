"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withState = _interopRequireDefault(require("recompose/withState"));

var _withHandlers = _interopRequireDefault(require("recompose/withHandlers"));

var _reactI18next = require("react-i18next");

var _Progress = require("material-ui/Progress");

var _Tooltip = _interopRequireDefault(require("material-ui/Tooltip"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _Shuffle = _interopRequireDefault(require("@material-ui/icons/Shuffle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _withState.default)('isLoading', 'setLoading', false), (0, _withHandlers.default)({
  onClick: function onClick(props) {
    return function () {
      props.setLoading(true);
      props.onShuffle().then(function () {
        props.setLoading(false);
      }, function () {
        props.setLoading(false);
      });
    };
  }
}), (0, _reactI18next.translate)());

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Progress.CircularProgress, {
  size: "100%"
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_Shuffle.default, {});

var ShuffleButton = function ShuffleButton(_ref) {
  var t = _ref.t,
      isLoading = _ref.isLoading,
      onClick = _ref.onClick;
  return (0, _jsx2.default)(_Tooltip.default, {
    title: t('playlists.shuffle'),
    placement: "top"
  }, void 0, (0, _jsx2.default)(_IconButton.default, {
    className: "PlaylistMeta-iconButton",
    onClick: onClick
  }, void 0, isLoading ? _ref2 : _ref3));
};

ShuffleButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  isLoading: _propTypes.default.bool.isRequired,
  onClick: _propTypes.default.func.isRequired,
  onShuffle: _propTypes.default.func.isRequired // eslint-disable-line react/no-unused-prop-types

} : {};

var _default = enhance(ShuffleButton); //# sourceMappingURL=ShufflePlaylistButton.js.map


exports.default = _default;
//# sourceMappingURL=ShufflePlaylistButton.js.map
