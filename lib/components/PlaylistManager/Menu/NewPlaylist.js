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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Add = require('material-ui-icons/Add');

var _Add2 = _interopRequireDefault(_Add);

var _PromptDialog = require('../../Dialogs/PromptDialog');

var _PromptDialog2 = _interopRequireDefault(_PromptDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref = (0, _jsx3.default)('div', {
  className: 'PlaylistMenuRow-active-icon'
}, void 0, (0, _jsx3.default)(_Add2.default, {}));

var _ref2 = (0, _jsx3.default)(_Add2.default, {
  nativeColor: '#777'
});

var NewPlaylist = function (_React$Component) {
  (0, _inherits3.default)(NewPlaylist, _React$Component);

  function NewPlaylist() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NewPlaylist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      creating: false
    }, _this.handleOpen = function () {
      _this.setState({ creating: true });
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleSubmit = function (playlistName) {
      return Promise.resolve(_this.props.onCreatePlaylist(playlistName)).then(_this.closeDialog.bind(_this));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  NewPlaylist.prototype.closeDialog = function closeDialog() {
    this.setState({ creating: false });
  };

  NewPlaylist.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        className = _props.className;

    return (0, _jsx3.default)(_react2.default.Fragment, {}, void 0, (0, _jsx3.default)('button', {
      role: 'menuitem',
      className: (0, _classnames2.default)('PlaylistMenuRow', 'PlaylistMenuRow--create', className),
      onClick: this.handleOpen
    }, void 0, (0, _jsx3.default)('div', {
      className: 'PlaylistMenuRow-content'
    }, void 0, (0, _jsx3.default)('div', {
      className: 'PlaylistMenuRow-title'
    }, void 0, _ref, t('playlists.new')))), this.state.creating && (0, _jsx3.default)(_PromptDialog2.default, {
      title: t('dialogs.createPlaylist.nameInputTitle'),
      icon: _ref2,
      submitLabel: t('dialogs.createPlaylist.action'),
      onSubmit: this.handleSubmit,
      onCancel: this.handleClose
    }));
  };

  return NewPlaylist;
}(_react2.default.Component);

NewPlaylist.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  t: _propTypes2.default.func.isRequired,
  onCreatePlaylist: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(NewPlaylist);
//# sourceMappingURL=NewPlaylist.js.map
//# sourceMappingURL=NewPlaylist.js.map
