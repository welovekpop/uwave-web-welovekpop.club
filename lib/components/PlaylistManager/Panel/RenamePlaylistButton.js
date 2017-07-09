'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

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

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _modeEdit = require('material-ui/svg-icons/editor/mode-edit');

var _modeEdit2 = _interopRequireDefault(_modeEdit);

var _PromptDialog = require('../../Dialogs/PromptDialog');

var _PromptDialog2 = _interopRequireDefault(_PromptDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_modeEdit2.default, {
  color: '#555',
  hoverColor: '#fff'
});

var _ref2 = (0, _jsx3.default)(_modeEdit2.default, {
  color: '#777'
});

var RenamePlaylistButton = function (_React$Component) {
  (0, _inherits3.default)(RenamePlaylistButton, _React$Component);

  function RenamePlaylistButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RenamePlaylistButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      renaming: false
    }, _this.handleOpen = function () {
      _this.setState({ renaming: true });
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleSubmit = function (name) {
      return _this.props.onRename(name).then(_this.closeDialog.bind(_this));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  RenamePlaylistButton.prototype.closeDialog = function closeDialog() {
    this.setState({ renaming: false });
  };

  RenamePlaylistButton.prototype.render = function render() {
    var t = this.props.t;

    return (0, _jsx3.default)(_IconButton2.default, {
      onClick: this.handleOpen,
      tooltip: t('playlists.rename'),
      tooltipPosition: 'top-center'
    }, void 0, _ref, this.state.renaming && (0, _jsx3.default)(_PromptDialog2.default, {
      title: t('dialogs.renamePlaylist.nameInputTitle'),
      submitLabel: t('dialogs.renamePlaylist.action'),
      icon: _ref2,
      value: this.props.initialName,
      onSubmit: this.handleSubmit,
      onCancel: this.handleClose
    }));
  };

  return RenamePlaylistButton;
}(_react2.default.Component);

RenamePlaylistButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onRename: _propTypes2.default.func.isRequired,
  initialName: _propTypes2.default.string
} : {};

exports.default = (0, _reactI18next.translate)()(RenamePlaylistButton);
//# sourceMappingURL=RenamePlaylistButton.js.map
//# sourceMappingURL=RenamePlaylistButton.js.map
