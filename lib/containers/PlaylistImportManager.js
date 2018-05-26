"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _ImportActionCreators = require("../actions/ImportActionCreators");

var _importSelectors = require("../selectors/importSelectors");

var _Import = _interopRequireDefault(require("../components/PlaylistManager/Import"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  selectedSourceType: _importSelectors.selectedSourceTypeSelector,
  sourceStates: function sourceStates(state) {
    return state.sources;
  }
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onShowImportPanel: _ImportActionCreators.showImportSourcePanel,
    onHideImportPanel: _ImportActionCreators.hideImportSourcePanel
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Import.default);

exports.default = _default;
//# sourceMappingURL=PlaylistImportManager.js.map
