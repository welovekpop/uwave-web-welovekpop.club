'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

var _reactRedux = require('react-redux');

var _SearchBar = require('../components/PlaylistManager/Header/SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _SearchActionCreators = require('../actions/SearchActionCreators');

var _searchSelectors = require('../selectors/searchSelectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  source: _searchSelectors.searchSourceTypeSelector
});

var mapDispatchToProps = {
  onSubmit: _SearchActionCreators.search,
  onSourceChange: _SearchActionCreators.setSource
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SearchBar2.default);
//# sourceMappingURL=MediaSearchBar.js.map
//# sourceMappingURL=MediaSearchBar.js.map
