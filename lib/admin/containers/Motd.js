'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

var _reactRedux = require('react-redux');

var _Motd = require('../components/Motd');

var _Motd2 = _interopRequireDefault(_Motd);

var _ChatActionCreators = require('../../actions/ChatActionCreators');

var _chatSelectors = require('../../selectors/chatSelectors');

var _authSelectors = require('../selectors/authSelectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  motd: _chatSelectors.rawMotdSelector,
  compileOptions: _chatSelectors.markupCompilerOptionsSelector,
  canChangeMotd: _authSelectors.canChangeMotdSelector
});

var mapDispatchToProps = {
  onSetMotd: _ChatActionCreators.setMotd
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Motd2.default);
//# sourceMappingURL=Motd.js.map
//# sourceMappingURL=Motd.js.map
