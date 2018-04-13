"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Player = _interopRequireDefault(require("./Player"));

var _PreviewPlayer = _interopRequireDefault(require("./PreviewPlayer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayerWrapper = function PlayerWrapper(props) {
  if (props.mode === 'preview') {
    return _react.default.createElement(_PreviewPlayer.default, props);
  }

  return _react.default.createElement(_Player.default, props);
};

PlayerWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  mode: _propTypes.default.string.isRequired
} : {};
var _default = PlayerWrapper; //# sourceMappingURL=PlayerWrapper.js.map

exports.default = _default;
//# sourceMappingURL=PlayerWrapper.js.map
