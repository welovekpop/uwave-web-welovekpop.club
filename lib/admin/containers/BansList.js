"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _lifecycle = _interopRequireDefault(require("recompose/lifecycle"));

var _bans = require("../actions/bans");

var _BansList = _interopRequireDefault(require("../components/BansList"));

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

var _default = (0, _compose.default)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _lifecycle.default)({
  componentDidMount: function componentDidMount() {
    this.props.onLoadBans();
  }
}))(_BansList.default);

exports.default = _default;
//# sourceMappingURL=BansList.js.map
