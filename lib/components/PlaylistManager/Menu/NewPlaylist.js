"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _PromptDialog = _interopRequireDefault(require("../../Dialogs/PromptDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "PlaylistMenuRow-active-icon"
}, void 0, (0, _jsx2.default)(_Add.default, {}));

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Add.default, {
  nativeColor: "#777"
});

var NewPlaylist =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(NewPlaylist, _React$Component);

  function NewPlaylist() {
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
      _this.closeDialog();
    }, _this.handleSubmit = function (playlistName) {
      return Promise.resolve(_this.props.onCreatePlaylist(playlistName)).then(_this.closeDialog.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))));
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = NewPlaylist.prototype;

  _proto.closeDialog = function closeDialog() {
    this.setState({
      creating: false
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        t = _this$props.t,
        className = _this$props.className;
    return (0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(_MenuItem.default, {
      className: (0, _classnames.default)('PlaylistMenuRow', 'PlaylistMenuRow--create', className),
      onClick: this.handleOpen
    }, void 0, (0, _jsx2.default)("div", {
      className: "PlaylistMenuRow-title"
    }, void 0, _ref, t('playlists.new'))), this.state.creating && (0, _jsx2.default)(_PromptDialog.default, {
      title: t('dialogs.createPlaylist.nameInputTitle'),
      icon: _ref2,
      submitLabel: t('dialogs.createPlaylist.action'),
      onSubmit: this.handleSubmit,
      onCancel: this.handleClose
    }));
  };

  return NewPlaylist;
}(_react.default.Component);

NewPlaylist.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  t: _propTypes.default.func.isRequired,
  onCreatePlaylist: _propTypes.default.func.isRequired
} : {};

var _default = enhance(NewPlaylist);

exports.default = _default;
//# sourceMappingURL=NewPlaylist.js.map
