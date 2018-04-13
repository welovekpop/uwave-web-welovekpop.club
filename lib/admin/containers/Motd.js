"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reselect = require("reselect");

var _reactRedux = require("react-redux");

var _Motd = _interopRequireDefault(require("../components/Motd"));

var _ChatActionCreators = require("../../actions/ChatActionCreators");

var _chatSelectors = require("../../selectors/chatSelectors");

var _authSelectors = require("../selectors/authSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  motd: _chatSelectors.rawMotdSelector,
  compileOptions: _chatSelectors.markupCompilerOptionsSelector,
  canChangeMotd: _authSelectors.canChangeMotdSelector
});
var mapDispatchToProps = {
  onSetMotd: _ChatActionCreators.setMotd
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Motd.default); //# sourceMappingURL=Motd.js.map


exports.default = _default;
//# sourceMappingURL=Motd.js.map
