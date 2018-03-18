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

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

var _modeEdit = require('material-ui/svg-icons/editor/mode-edit');

var _modeEdit2 = _interopRequireDefault(_modeEdit);

var _uWaveParseChatMarkup = require('u-wave-parse-chat-markup');

var _uWaveParseChatMarkup2 = _interopRequireDefault(_uWaveParseChatMarkup);

var _compile = require('../../../components/Chat/Markup/compile');

var _compile2 = _interopRequireDefault(_compile);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose2.default)((0, _withState2.default)('newMotd', 'setMotd', function (props) {
  return props.motd;
}), (0, _withProps2.default)(function (props) {
  return {
    parsedMotd: (0, _compile2.default)((0, _uWaveParseChatMarkup2.default)(props.newMotd), props.compileOptions)
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
    };
  }
}), (0, _muiThemeable2.default)());

function autoFocus(el) {
  if (el) el.focus();
}

var _ref2 = (0, _jsx3.default)(_modeEdit2.default, {
  color: '#fff'
});

var Motd = function Motd(_ref) {
  var muiTheme = _ref.muiTheme,
      canChangeMotd = _ref.canChangeMotd,
      newMotd = _ref.newMotd,
      parsedMotd = _ref.parsedMotd,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit;
  return (0, _jsx3.default)(_Card.Card, {
    className: 'AdminMotd'
  }, void 0, (0, _jsx3.default)(_Card.CardHeader, {
    title: 'Message of the Day',
    showExpandableButton: canChangeMotd,
    closeIcon: _ref2
  }), (0, _jsx3.default)(_Card.CardText, {}, void 0, parsedMotd), (0, _jsx3.default)(_Card.CardText, {
    expandable: true,
    style: { paddingTop: 0 }
  }, void 0, _react2.default.createElement('textarea', {
    className: 'AdminMotd-field',
    rows: 4,
    onChange: onChange,
    value: newMotd,
    ref: autoFocus
  })), (0, _jsx3.default)(_Card.CardActions, {
    expandable: true
  }, void 0, (0, _jsx3.default)(_FlatButton2.default, {
    onClick: onSubmit,
    label: 'Save',
    backgroundColor: muiTheme.palette.primary1Color,
    hoverColor: muiTheme.palette.primary2Color,
    rippleColor: muiTheme.palette.primary3Color
  })));
};

Motd.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: _propTypes2.default.object.isRequired,
  canChangeMotd: _propTypes2.default.bool,
  newMotd: _propTypes2.default.string.isRequired,
  parsedMotd: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onSubmit: _propTypes2.default.func.isRequired
} : {};

Motd.defaultProps = {
  canChangeMotd: false
};

exports.default = enhance(Motd);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
