"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _Popover = _interopRequireDefault(require("material-ui/Popover"));

var _Tooltip = _interopRequireDefault(require("material-ui/Tooltip"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _Progress = require("material-ui/Progress");

var _SkipNext = _interopRequireDefault(require("@material-ui/icons/SkipNext"));

var _SkipReasonsList = _interopRequireDefault(require("./SkipReasonsList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var popoverPosition = {
  marginThreshold: 0,
  anchorOrigin: {
    horizontal: 'center',
    vertical: 'bottom'
  },
  transformOrigin: {
    horizontal: 'center',
    vertical: 'bottom'
  }
}; // TODO not hardcode these maybe?

var reasons = ['genre', 'history', 'unavailable', 'nsfw', 'duration', 'downvotes', 'other'];

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("span", {}, void 0, (0, _jsx2.default)("div", {
  className: "SkipButton is-loading"
}, void 0, (0, _jsx2.default)(_Progress.CircularProgress, {
  className: "SkipButton-loader"
})));

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_SkipNext.default, {});

var SkipButton =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(SkipButton, _React$Component);

  function SkipButton() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
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
      _this.setState({
        isSkipping: true
      });

      Promise.resolve(_this.props.onSkip(reason)).then(function () {
        _this.setState({
          isSkipping: false
        });
      });

      _this.handleClose();
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = SkipButton.prototype;

  _proto.render = function render() {
    var t = this.props.t;

    if (this.state.isSkipping) {
      return _ref;
    }

    var message = t('booth.skip.self');

    if (!this.props.userIsDJ) {
      message = t('booth.skip.other', {
        user: this.props.currentDJ.username
      });
    }

    return (0, _jsx2.default)("span", {}, void 0, (0, _jsx2.default)(_Tooltip.default, {
      title: message
    }, void 0, (0, _jsx2.default)(_IconButton.default, {
      className: "SkipButton",
      onClick: this.handleOpen
    }, void 0, _ref2)), _react.default.createElement(_Popover.default, (0, _extends2.default)({
      open: this.state.isOpen,
      anchorEl: this.state.anchor,
      onClose: this.handleClose,
      classes: {
        paper: 'SkipButton-list'
      }
    }, popoverPosition), (0, _jsx2.default)(_SkipReasonsList.default, {
      reasons: reasons.map(function (name) {
        return {
          name: name,
          label: t("booth.skip.reasons." + name)
        };
      }),
      onSelect: this.handleSkip
    })));
  };

  return SkipButton;
}(_react.default.Component);

SkipButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  userIsDJ: _propTypes.default.bool.isRequired,
  currentDJ: _propTypes.default.object.isRequired,
  onSkip: _propTypes.default.func.isRequired
} : {};

var _default = (0, _compose.default)((0, _reactI18next.translate)(), _pure.default)(SkipButton); //# sourceMappingURL=SkipButton.js.map


exports.default = _default;
//# sourceMappingURL=SkipButton.js.map
