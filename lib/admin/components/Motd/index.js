'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withState = require('recompose/withState');

var _withState2 = _interopRequireDefault(_withState);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Collapse = require('material-ui/transitions/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _ModeEdit = require('material-ui-icons/ModeEdit');

var _ModeEdit2 = _interopRequireDefault(_ModeEdit);

var _uWaveParseChatMarkup = require('u-wave-parse-chat-markup');

var _uWaveParseChatMarkup2 = _interopRequireDefault(_uWaveParseChatMarkup);

var _compile = require('../../../components/Chat/Markup/compile');

var _compile2 = _interopRequireDefault(_compile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose2.default)((0, _withState2.default)('newMotd', 'setMotd', function (props) {
  return props.motd;
}), (0, _withState2.default)('expanded', 'setExpanded', false), (0, _withProps2.default)(function (props) {
  return {
    parsedMotd: (0, _compile2.default)((0, _uWaveParseChatMarkup2.default)(props.newMotd), props.compileOptions),
    onExpand: function onExpand() {
      return props.setExpanded(!props.expanded);
    }
  };
}), (0, _withHandlers2.default)({
  onChange: function onChange(props) {
    return function (event) {
      props.setMotd(event.target.value);
    };
  },
  onSubmit: function onSubmit(props) {
    return function () {
      props.onSetMotd(props.newMotd);
      props.setExpanded(false);
    };
  }
}));

function autoFocus(el) {
  if (el) el.focus();
}

var _ref2 = (0, _jsx3.default)(_ModeEdit2.default, {});

var Motd = function Motd(_ref) {
  var canChangeMotd = _ref.canChangeMotd,
      newMotd = _ref.newMotd,
      parsedMotd = _ref.parsedMotd,
      expanded = _ref.expanded,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      onExpand = _ref.onExpand;
  return (0, _jsx3.default)(_Card2.default, {
    className: 'AdminMotd'
  }, void 0, (0, _jsx3.default)(_Card.CardHeader, {
    title: 'Message of the Day',
    action: canChangeMotd && (0, _jsx3.default)(_IconButton2.default, {
      onClick: onExpand
    }, void 0, _ref2)
  }), (0, _jsx3.default)(_Card.CardContent, {}, void 0, parsedMotd), (0, _jsx3.default)(_Collapse2.default, {
    'in': expanded,
    unmountOnExit: true
  }, void 0, (0, _jsx3.default)(_Card.CardContent, {
    style: { paddingTop: 0 }
  }, void 0, _react2.default.createElement('textarea', {
    className: 'AdminMotd-field',
    rows: 4,
    onChange: onChange,
    value: newMotd,
    ref: autoFocus
  })), (0, _jsx3.default)(_Card.CardActions, {}, void 0, (0, _jsx3.default)(_Button2.default, {
    variant: 'raised',
    color: 'primary',
    onClick: onSubmit
  }, void 0, 'Save'))));
};

Motd.propTypes = process.env.NODE_ENV !== "production" ? {
  canChangeMotd: _propTypes2.default.bool,
  newMotd: _propTypes2.default.string.isRequired,
  parsedMotd: _propTypes2.default.array.isRequired,
  expanded: _propTypes2.default.bool.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onSubmit: _propTypes2.default.func.isRequired,
  onExpand: _propTypes2.default.func.isRequired
} : {};

Motd.defaultProps = {
  canChangeMotd: false
};

exports.default = enhance(Motd);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
