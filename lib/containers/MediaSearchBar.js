"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reselect = require("reselect");

var _reactRedux = require("react-redux");

var _SearchBar = _interopRequireDefault(require("../components/PlaylistManager/Header/SearchBar"));

var _SearchActionCreators = require("../actions/SearchActionCreators");

var _searchSelectors = require("../selectors/searchSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  source: _searchSelectors.searchSourceTypeSelector
});
var mapDispatchToProps = {
  onSubmit: _SearchActionCreators.search,
  onSourceChange: _SearchActionCreators.setSource
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SearchBar.default); //# sourceMappingURL=MediaSearchBar.js.map


exports.default = _default;
//# sourceMappingURL=MediaSearchBar.js.map
