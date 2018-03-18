'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _getContext = require('recompose/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

var _lifecycle = require('recompose/lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _reselect = require('reselect');

var _reactRedux = require('react-redux');

var _AdminApp = require('../components/AdminApp');

var _AdminApp2 = _interopRequireDefault(_AdminApp);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _view = require('../actions/view');

var _viewSelectors = require('../selectors/viewSelectors');

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
  store.mount('admin', _reducers2.default);
}

function mountAdminReducerOnce(store) {
  if (!hasAdminState(store)) {
    mountAdminReducer(store);
  }
}

var enhance = (0, _compose2.default)((0, _getContext2.default)({ store: _propTypes2.default.object }), (0, _lifecycle2.default)({
  componentWillMount: function componentWillMount() {
    if (this.props.store) {
      mountAdminReducerOnce(this.props.store);
    }
  }
}), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps));

exports.default = enhance(_AdminApp2.default);
//# sourceMappingURL=AdminApp.js.map
//# sourceMappingURL=AdminApp.js.map
