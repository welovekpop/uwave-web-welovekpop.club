"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _PromptDialog = _interopRequireDefault(require("../Dialogs/PromptDialog"));

var _PlaylistsMenu = _interopRequireDefault(require("./PlaylistsMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_Add.default, {
  nativeColor: "#777"
});

var AddToPlaylistMenu =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AddToPlaylistMenu, _React$Component);

  function AddToPlaylistMenu() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      creating: false
    }, _this.handleOpen = function () {
      _this.setState({
        creating: true
      });
    }, _this.handleClose = function () {
      _this.setState({
        creating: false
      });
    }, _this.handleSubmit = function (playlistName) {
      return Promise.resolve(_this.props.onCreatePlaylist(playlistName)).then(function (playlist) {
        return _this.props.onSelect(playlist);
      }).then(function () {
        return _this.props.onClose();
      });
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = AddToPlaylistMenu.prototype;

  _proto.render = function render() {
    var _props = this.props,
        t = _props.t,
        props = (0, _objectWithoutProperties2.default)(_props, ["t"]);
    return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, !this.state.creating && _react.default.createElement(_PlaylistsMenu.default, (0, _extends2.default)({}, props, {
      onCreatePlaylist: this.handleOpen
    })), this.state.creating && (0, _jsx2.default)(_PromptDialog.default, {
      title: t('dialogs.createPlaylist.nameInputTitle'),
      icon: _ref,
      submitLabel: t('dialogs.createPlaylist.action'),
      onSubmit: this.handleSubmit,
      onCancel: this.handleClose
    }));
  };

  return AddToPlaylistMenu;
}(_react.default.Component);

AddToPlaylistMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  onCreatePlaylist: _propTypes.default.func.isRequired
} : {};

var _default = enhance(AddToPlaylistMenu); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
