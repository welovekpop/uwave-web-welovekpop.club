'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _lifecycle = require('recompose/lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _bans = require('../actions/bans');

var _BansList = require('../components/BansList');

var _BansList2 = _interopRequireDefault(_BansList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    bans: state.admin.bans.bans
  };
};

var mapDispatchToProps = {
  onLoadBans: _bans.loadBans,
  onUnbanUser: _bans.unbanUserAndReload
};

exports.default = (0, _compose2.default)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _lifecycle2.default)({
  componentDidMount: function componentDidMount() {
    this.props.onLoadBans();
  }
}))(_BansList2.default);
//# sourceMappingURL=BansList.js.map
//# sourceMappingURL=BansList.js.map
