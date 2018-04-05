import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';
import withHandlers from 'recompose/withHandlers';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/es/Card';
import Button from 'material-ui/es/Button';
import IconButton from 'material-ui/es/IconButton';
import Collapse from 'material-ui/es/transitions/Collapse';
import EditIcon from 'material-ui-icons/ModeEdit';
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
    return function () {
      props.onSetMotd(props.newMotd);
      props.setExpanded(false);
    };
  }
}));

function autoFocus(el) {
  if (el) el.focus();
}

var _ref2 = _jsx(EditIcon, {});

var Motd = function Motd(_ref) {
  var canChangeMotd = _ref.canChangeMotd,
      newMotd = _ref.newMotd,
      parsedMotd = _ref.parsedMotd,
      expanded = _ref.expanded,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      onExpand = _ref.onExpand;
  return _jsx(Card, {
    className: 'AdminMotd'
  }, void 0, _jsx(CardHeader, {
    title: 'Message of the Day',
    action: canChangeMotd && _jsx(IconButton, {
      onClick: onExpand
    }, void 0, _ref2)
  }), _jsx(CardContent, {}, void 0, parsedMotd), _jsx(Collapse, {
    'in': expanded,
    unmountOnExit: true
  }, void 0, _jsx(CardContent, {
    style: { paddingTop: 0 }
  }, void 0, React.createElement('textarea', {
    className: 'AdminMotd-field',
    rows: 4,
    onChange: onChange,
    value: newMotd,
    ref: autoFocus
  })), _jsx(CardActions, {}, void 0, _jsx(Button, {
    variant: 'raised',
    color: 'primary',
    onClick: onSubmit
  }, void 0, 'Save'))));
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
