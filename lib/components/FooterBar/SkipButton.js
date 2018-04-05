'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _Popover = require('material-ui/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _Tooltip = require('material-ui/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Progress = require('material-ui/Progress');

var _SkipNext = require('material-ui-icons/SkipNext');

var _SkipNext2 = _interopRequireDefault(_SkipNext);

var _SkipReasonsList = require('./SkipReasonsList');

var _SkipReasonsList2 = _interopRequireDefault(_SkipReasonsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var popoverPosition = {
  marginThreshold: 0,
  anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
  transformOrigin: { horizontal: 'center', vertical: 'bottom' }
};

// TODO not hardcode these maybe?
var reasons = ['genre', 'history', 'unavailable', 'nsfw', 'duration', 'downvotes', 'other'];

var _ref = (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('div', {
  className: 'SkipButton is-loading'
}, void 0, (0, _jsx3.default)(_Progress.CircularProgress, {
  className: 'SkipButton-loader'
})));

var _ref2 = (0, _jsx3.default)(_SkipNext2.default, {});

var SkipButton = function (_React$Component) {
  (0, _inherits3.default)(SkipButton, _React$Component);

  function SkipButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SkipButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      isSkipping: false,
      isOpen: false,
      anchor: null
    }, _this.handleOpen = function (event) {
      if (_this.props.userIsDJ) {
        _this.handleSkip('');
        return;
      }

      _this.setState({
        isOpen: true,
        anchor: event.currentTarget
      });
    }, _this.handleClose = function () {
      _this.setState({
        isOpen: false
      });
    }, _this.handleSkip = function (reason) {
      _this.setState({ isSkipping: true });
      Promise.resolve(_this.props.onSkip(reason)).then(function () {
        _this.setState({ isSkipping: false });
      });
      _this.handleClose();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  SkipButton.prototype.render = function render() {
    var t = this.props.t;

    if (this.state.isSkipping) {
      return _ref;
    }

    var message = t('booth.skip.self');
    if (!this.props.userIsDJ) {
      message = t('booth.skip.other', { user: this.props.currentDJ.username });
    }

    return (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)(_Tooltip2.default, {
      title: message
    }, void 0, (0, _jsx3.default)(_IconButton2.default, {
      className: 'SkipButton',
      onClick: this.handleOpen
    }, void 0, _ref2)), _react2.default.createElement(_Popover2.default, (0, _extends3.default)({
      open: this.state.isOpen,
      anchorEl: this.state.anchor,
      onClose: this.handleClose,
      classes: { paper: 'SkipButton-list' }
    }, popoverPosition), (0, _jsx3.default)(_SkipReasonsList2.default, {
      reasons: reasons.map(function (name) {
        return {
          name: name,
          label: t('booth.skip.reasons.' + name)
        };
      }),
      onSelect: this.handleSkip
    })));
  };

  return SkipButton;
}(_react2.default.Component);

SkipButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  userIsDJ: _propTypes2.default.bool.isRequired,
  currentDJ: _propTypes2.default.object.isRequired,
  onSkip: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _compose2.default)((0, _reactI18next.translate)(), _pure2.default)(SkipButton);
//# sourceMappingURL=SkipButton.js.map
//# sourceMappingURL=SkipButton.js.map
