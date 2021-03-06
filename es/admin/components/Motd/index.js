import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';
import withHandlers from 'recompose/withHandlers';
import Card from "@material-ui/core/es/Card";
import CardHeader from "@material-ui/core/es/CardHeader";
import CardContent from "@material-ui/core/es/CardContent";
import CardActions from "@material-ui/core/es/CardActions";
import Button from "@material-ui/core/es/Button";
import IconButton from "@material-ui/core/es/IconButton";
import Collapse from "@material-ui/core/es/Collapse";
import EditIcon from "@material-ui/icons/es/ModeEdit";
import parse from 'u-wave-parse-chat-markup';
import compile from '../../../components/Chat/Markup/compile';
var enhance = compose(withState('newMotd', 'setMotd', function (props) {
  return props.motd;
}), withState('expanded', 'setExpanded', false), withProps(function (props) {
  return {
    parsedMotd: compile(parse(props.newMotd), props.compileOptions),
    onExpand: function onExpand() {
      return props.setExpanded(!props.expanded);
    }
  };
}), withHandlers({
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
_jsx(EditIcon, {});

var _ref3 =
/*#__PURE__*/
_jsx(CardActions, {}, void 0, _jsx(Button, {
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
  return _jsx(Card, {
    className: "AdminMotd"
  }, void 0, _jsx(CardHeader, {
    title: "Message of the Day",
    action: canChangeMotd && _jsx(IconButton, {
      onClick: onExpand
    }, void 0, _ref2)
  }), _jsx(CardContent, {}, void 0, parsedMotd), _jsx(Collapse, {
    "in": expanded,
    unmountOnExit: true
  }, void 0, _jsx("form", {
    onSubmit: onSubmit
  }, void 0, _jsx(CardContent, {
    style: {
      paddingTop: 0
    }
  }, void 0, React.createElement("textarea", {
    className: "AdminMotd-field",
    rows: 4,
    onChange: onChange,
    value: newMotd,
    ref: autoFocus
  })), _ref3)));
};

Motd.propTypes = process.env.NODE_ENV !== "production" ? {
  canChangeMotd: PropTypes.bool,
  newMotd: PropTypes.string.isRequired,
  parsedMotd: PropTypes.array.isRequired,
  expanded: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired
} : {};
Motd.defaultProps = {
  canChangeMotd: false
};
export default enhance(Motd);
//# sourceMappingURL=index.js.map
