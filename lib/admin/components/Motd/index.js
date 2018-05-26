"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withState = _interopRequireDefault(require("recompose/withState"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _withHandlers = _interopRequireDefault(require("recompose/withHandlers"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _ModeEdit = _interopRequireDefault(require("@material-ui/icons/ModeEdit"));

var _uWaveParseChatMarkup = _interopRequireDefault(require("u-wave-parse-chat-markup"));

var _compile = _interopRequireDefault(require("../../../components/Chat/Markup/compile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _withState.default)('newMotd', 'setMotd', function (props) {
  return props.motd;
}), (0, _withState.default)('expanded', 'setExpanded', false), (0, _withProps.default)(function (props) {
  return {
    parsedMotd: (0, _compile.default)((0, _uWaveParseChatMarkup.default)(props.newMotd), props.compileOptions),
    onExpand: function onExpand() {
      return props.setExpanded(!props.expanded);
    }
  };
}), (0, _withHandlers.default)({
  onChange: function onChange(props) {
    return function (event) {
      props.setMotd(event.target.value);
    };
  },
  onSubmit: function onSubmit(props) {
    return function (event) {
      event.preventDefault();
      props.onSetMotd(props.newMotd);
      props.setExpanded(false);
    };
  }
}));

function autoFocus(el) {
  if (el) el.focus();
}

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_ModeEdit.default, {});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_CardActions.default, {}, void 0, (0, _jsx2.default)(_Button.default, {
  type: "submit",
  variant: "raised",
  color: "primary"
}, void 0, "Save"));

var Motd = function Motd(_ref) {
  var canChangeMotd = _ref.canChangeMotd,
      newMotd = _ref.newMotd,
      parsedMotd = _ref.parsedMotd,
      expanded = _ref.expanded,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      onExpand = _ref.onExpand;
  return (0, _jsx2.default)(_Card.default, {
    className: "AdminMotd"
  }, void 0, (0, _jsx2.default)(_CardHeader.default, {
    title: "Message of the Day",
    action: canChangeMotd && (0, _jsx2.default)(_IconButton.default, {
      onClick: onExpand
    }, void 0, _ref2)
  }), (0, _jsx2.default)(_CardContent.default, {}, void 0, parsedMotd), (0, _jsx2.default)(_Collapse.default, {
    "in": expanded,
    unmountOnExit: true
  }, void 0, (0, _jsx2.default)("form", {
    onSubmit: onSubmit
  }, void 0, (0, _jsx2.default)(_CardContent.default, {
    style: {
      paddingTop: 0
    }
  }, void 0, _react.default.createElement("textarea", {
    className: "AdminMotd-field",
    rows: 4,
    onChange: onChange,
    value: newMotd,
    ref: autoFocus
  })), _ref3)));
};

Motd.propTypes = process.env.NODE_ENV !== "production" ? {
  canChangeMotd: _propTypes.default.bool,
  newMotd: _propTypes.default.string.isRequired,
  parsedMotd: _propTypes.default.array.isRequired,
  expanded: _propTypes.default.bool.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onSubmit: _propTypes.default.func.isRequired,
  onExpand: _propTypes.default.func.isRequired
} : {};
Motd.defaultProps = {
  canChangeMotd: false
};

var _default = enhance(Motd);

exports.default = _default;
//# sourceMappingURL=index.js.map
