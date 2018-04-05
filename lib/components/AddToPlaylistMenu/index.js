'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Add = require('material-ui-icons/Add');

var _Add2 = _interopRequireDefault(_Add);

var _PromptDialog = require('../Dialogs/PromptDialog');

var _PromptDialog2 = _interopRequireDefault(_PromptDialog);

var _PlaylistsMenu = require('./PlaylistsMenu');

var _PlaylistsMenu2 = _interopRequireDefault(_PlaylistsMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref = (0, _jsx3.default)(_Add2.default, {
  nativeColor: '#777'
});

var AddToPlaylistMenu = function (_React$Component) {
  (0, _inherits3.default)(AddToPlaylistMenu, _React$Component);

  function AddToPlaylistMenu() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AddToPlaylistMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      creating: false
    }, _this.handleOpen = function () {
      _this.setState({ creating: true });
    }, _this.handleClose = function () {
      _this.setState({ creating: false });
    }, _this.handleSubmit = function (playlistName) {
      return Promise.resolve(_this.props.onCreatePlaylist(playlistName)).then(function (playlist) {
        return _this.props.onSelect(playlist);
      }).then(function () {
        return _this.props.onClose();
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AddToPlaylistMenu.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        props = (0, _objectWithoutProperties3.default)(_props, ['t']);

    return (0, _jsx3.default)(_react2.default.Fragment, {}, void 0, !this.state.creating && _react2.default.createElement(_PlaylistsMenu2.default, (0, _extends3.default)({}, props, {
      onCreatePlaylist: this.handleOpen
    })), this.state.creating && (0, _jsx3.default)(_PromptDialog2.default, {
      title: t('dialogs.createPlaylist.nameInputTitle'),
      icon: _ref,
      submitLabel: t('dialogs.createPlaylist.action'),
      onSubmit: this.handleSubmit,
      onCancel: this.handleClose
    }));
  };

  return AddToPlaylistMenu;
}(_react2.default.Component);

AddToPlaylistMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onClose: _propTypes2.default.func.isRequired,
  onSelect: _propTypes2.default.func.isRequired,
  onCreatePlaylist: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(AddToPlaylistMenu);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
