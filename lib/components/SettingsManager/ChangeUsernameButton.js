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

var _ModeEdit = require('material-ui-icons/ModeEdit');

var _ModeEdit2 = _interopRequireDefault(_ModeEdit);

var _PromptDialog = require('../Dialogs/PromptDialog');

var _PromptDialog2 = _interopRequireDefault(_PromptDialog);

var _DialogCloseAnimation = require('../DialogCloseAnimation');

var _DialogCloseAnimation2 = _interopRequireDefault(_DialogCloseAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref = (0, _jsx3.default)(_ModeEdit2.default, {
  className: 'ChangeUsernameButton-icon'
});

var _ref2 = (0, _jsx3.default)(_ModeEdit2.default, {
  nativeColor: '#777'
});

var ChangeUsernameButton = function (_React$Component) {
  (0, _inherits3.default)(ChangeUsernameButton, _React$Component);

  function ChangeUsernameButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ChangeUsernameButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      changingUsername: false
    }, _this.handleOpen = function () {
      _this.setState({ changingUsername: true });
    }, _this.handleClose = function () {
      _this.closeDialog();
    }, _this.handleSubmit = function (name) {
      if (name === _this.props.initialUsername) {
        _this.closeDialog();
        return null;
      }
      return _this.props.onChangeUsername(name).then(_this.closeDialog.bind(_this));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ChangeUsernameButton.prototype.closeDialog = function closeDialog() {
    this.setState({ changingUsername: false });
  };

  ChangeUsernameButton.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        initialUsername = _props.initialUsername;

    return (0, _jsx3.default)(_react2.default.Fragment, {}, void 0, (0, _jsx3.default)(_IconButton2.default, {
      className: 'ChangeUsernameButton',
      onClick: this.handleOpen
    }, void 0, _ref), (0, _jsx3.default)(_DialogCloseAnimation2.default, {
      delay: 450
    }, void 0, this.state.changingUsername ? (0, _jsx3.default)(_PromptDialog2.default, {
      title: t('settings.profile.username.change'),
      submitLabel: t('settings.profile.username.save'),
      icon: _ref2,
      value: initialUsername,
      onSubmit: this.handleSubmit,
      onCancel: this.handleClose
    }) : null));
  };

  return ChangeUsernameButton;
}(_react2.default.Component);

ChangeUsernameButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onChangeUsername: _propTypes2.default.func.isRequired,
  initialUsername: _propTypes2.default.string
} : {};

exports.default = enhance(ChangeUsernameButton);
//# sourceMappingURL=ChangeUsernameButton.js.map
//# sourceMappingURL=ChangeUsernameButton.js.map
