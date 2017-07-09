'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _ErrorActionCreators = require('../actions/ErrorActionCreators');

var _errorSelectors = require('../selectors/errorSelectors');

var _ErrorArea = require('../components/ErrorArea');

var _ErrorArea2 = _interopRequireDefault(_ErrorArea);

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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ErrorArea2.default);
//# sourceMappingURL=ErrorArea.js.map
//# sourceMappingURL=ErrorArea.js.map
