"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _ErrorActionCreators = require("../actions/ErrorActionCreators");

var _errorSelectors = require("../selectors/errorSelectors");

var _ErrorArea = _interopRequireDefault(require("../components/ErrorArea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: (0, _errorSelectors.firstErrorSelector)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onDismiss: _ErrorActionCreators.dismiss
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ErrorArea.default);

exports.default = _default;
//# sourceMappingURL=ErrorArea.js.map
