"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Button = _interopRequireDefault(require("material-ui/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var VideoDisabledMessage = function VideoDisabledMessage(_ref) {
  var t = _ref.t,
      onEnableVideo = _ref.onEnableVideo;
  return (0, _jsx2.default)("div", {
    className: "VideoDisabledMessage"
  }, void 0, (0, _jsx2.default)("p", {
    className: "VideoDisabledMessage-text"
  }, void 0, t('booth.videoDisabled')), (0, _jsx2.default)(_Button.default, {
    variant: "raised",
    color: "primary",
    onClick: onEnableVideo
  }, void 0, 'Enable?'));
};

VideoDisabledMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onEnableVideo: _propTypes.default.func.isRequired
} : {};

var _default = enhance(VideoDisabledMessage); //# sourceMappingURL=VideoDisabledMessage.js.map


exports.default = _default;
//# sourceMappingURL=VideoDisabledMessage.js.map
