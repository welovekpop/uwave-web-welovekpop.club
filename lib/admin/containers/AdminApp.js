"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _getContext = _interopRequireDefault(require("recompose/getContext"));

var _lifecycle = _interopRequireDefault(require("recompose/lifecycle"));

var _reselect = require("reselect");

var _reactRedux = require("react-redux");

var _AdminApp = _interopRequireDefault(require("../components/AdminApp"));

var _reducers = _interopRequireDefault(require("../reducers"));

var _view = require("../actions/view");

var _viewSelectors = require("../selectors/viewSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  currentView: _viewSelectors.currentViewSelector
});
var mapDispatchToProps = {
  onTransition: _view.transition
};

function hasAdminState(store) {
  var state = store.getState();
  return state && !!state.admin;
}

function mountAdminReducer(store) {
  store.mount('admin', _reducers.default);
}

function mountAdminReducerOnce(store) {
  if (!hasAdminState(store)) {
    mountAdminReducer(store);
  }
}

var enhance = (0, _compose.default)((0, _getContext.default)({
  store: _propTypes.default.object
}), (0, _lifecycle.default)({
  componentWillMount: function componentWillMount() {
    if (this.props.store) {
      mountAdminReducerOnce(this.props.store);
    }
  }
}), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps));

var _default = enhance(_AdminApp.default); //# sourceMappingURL=AdminApp.js.map


exports.default = _default;
//# sourceMappingURL=AdminApp.js.map
