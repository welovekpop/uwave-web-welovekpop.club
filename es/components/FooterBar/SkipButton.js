import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import Popover from "material-ui/es/Popover";
import Tooltip from "material-ui/es/Tooltip";
import IconButton from "material-ui/es/IconButton";
import { CircularProgress } from "material-ui/es/Progress";
import SkipIcon from '@material-ui/icons/SkipNext';
import SkipReasonsList from './SkipReasonsList';
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
_jsx("span", {}, void 0, _jsx("div", {
  className: "SkipButton is-loading"
}, void 0, _jsx(CircularProgress, {
  className: "SkipButton-loader"
})));

var _ref2 =
/*#__PURE__*/
_jsx(SkipIcon, {});

var SkipButton =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SkipButton, _React$Component);

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
    }, _temp) || _assertThisInitialized(_this);
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

    return _jsx("span", {}, void 0, _jsx(Tooltip, {
      title: message
    }, void 0, _jsx(IconButton, {
      className: "SkipButton",
      onClick: this.handleOpen
    }, void 0, _ref2)), React.createElement(Popover, _extends({
      open: this.state.isOpen,
      anchorEl: this.state.anchor,
      onClose: this.handleClose,
      classes: {
        paper: 'SkipButton-list'
      }
    }, popoverPosition), _jsx(SkipReasonsList, {
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
}(React.Component);

SkipButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  userIsDJ: PropTypes.bool.isRequired,
  currentDJ: PropTypes.object.isRequired,
  onSkip: PropTypes.func.isRequired
} : {};
export default compose(translate(), pure)(SkipButton);
//# sourceMappingURL=SkipButton.js.map
