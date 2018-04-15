"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PlaylistPlay = _interopRequireDefault(require("@material-ui/icons/PlaylistPlay"));

var _ImportSourceBlock = _interopRequireDefault(require("../../components/PlaylistManager/Import/ImportSourceBlock"));

var _Form = _interopRequireDefault(require("../../components/Form"));

var _Group = _interopRequireDefault(require("../../components/Form/Group"));

var _TextField = _interopRequireDefault(require("../../components/Form/TextField"));

var _Button = _interopRequireDefault(require("../../components/Form/Button"));

var _actions = require("./actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_PlaylistPlay.default, {
  nativeColor: "#9f9d9e"
});

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Group.default, {}, void 0, (0, _jsx2.default)(_Button.default, {}, void 0, "Import From Channel"));

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_PlaylistPlay.default, {
  nativeColor: "#9f9d9e"
});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_Group.default, {}, void 0, (0, _jsx2.default)(_Button.default, {}, void 0, "Import Playlist"));

var YoutubeImportForm =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(YoutubeImportForm, _React$Component);

  function YoutubeImportForm() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleImportChannel = function (e) {
      e.preventDefault();
      var url = _this.channel.value;

      _this.dispatch((0, _actions.getChannelPlaylists)(url)).catch(function () {
        _this.props.onHideImportPanel();
      });

      _this.props.onShowImportPanel();
    }, _this.handleImportPlaylist = function (e) {
      e.preventDefault();
      var url = _this.playlist.value;

      _this.dispatch((0, _actions.getImportablePlaylist)(url)).catch(function () {
        _this.props.onHideImportPanel();
      });

      _this.props.onShowImportPanel();
    }, _this.refChannel = function (channel) {
      _this.channel = channel;
    }, _this.refPlaylist = function (playlist) {
      _this.playlist = playlist;
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = YoutubeImportForm.prototype;

  _proto.dispatch = function dispatch(action) {
    return this.context.store.dispatch(action);
  };

  _proto.render = function render() {
    return (0, _jsx2.default)(_ImportSourceBlock.default, {
      title: "YouTube",
      sourceType: "youtube"
    }, void 0, (0, _jsx2.default)(_Form.default, {
      onSubmit: this.handleImportChannel
    }, void 0, (0, _jsx2.default)(_Group.default, {}, void 0, _react.default.createElement(_TextField.default, {
      ref: this.refChannel,
      placeholder: "Channel URL",
      icon: _ref
    })), _ref2), (0, _jsx2.default)(_Form.default, {
      onSubmit: this.handleImportPlaylist
    }, void 0, (0, _jsx2.default)(_Group.default, {}, void 0, _react.default.createElement(_TextField.default, {
      ref: this.refPlaylist,
      placeholder: "Playlist URL",
      icon: _ref3
    })), _ref4));
  };

  return YoutubeImportForm;
}(_react.default.Component);

exports.default = YoutubeImportForm;
YoutubeImportForm.contextTypes = {
  store: _propTypes.default.object
};
YoutubeImportForm.propTypes = process.env.NODE_ENV !== "production" ? {
  onShowImportPanel: _propTypes.default.func.isRequired,
  onHideImportPanel: _propTypes.default.func.isRequired
} : {}; //# sourceMappingURL=ImportForm.js.map
//# sourceMappingURL=ImportForm.js.map
