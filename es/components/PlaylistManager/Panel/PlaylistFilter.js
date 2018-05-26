import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import debounce from 'lodash/debounce';
import Tooltip from "@material-ui/core/es/Tooltip";
import IconButton from "@material-ui/core/es/IconButton";
import FilterIcon from "@material-ui/icons/es/Search";
var enhance = translate();

var PlaylistFilter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(PlaylistFilter, _React$Component);

  function PlaylistFilter() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      open: false,
      value: ''
    }, _this.onFilter = debounce(function (value) {
      _this.props.onFilter(value);
    }, 200), _this.handleClick = function () {
      var isOpen = !_this.state.open;

      if (!isOpen) {
        _this.clearFilter();
      }

      _this.setState({
        open: isOpen,
        value: ''
      }, function () {
        if (isOpen) {
          _this.input.focus();
        }
      });
    }, _this.handleChange = function (event) {
      _this.setState({
        value: event.target.value
      });

      _this.onFilter(event.target.value);
    }, _this.refInput = function (input) {
      _this.input = input;
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = PlaylistFilter.prototype;

  _proto.clearFilter = function clearFilter() {
    if (this.state.value !== '') {
      this.props.onFilter('');
    }
  };

  _proto.render = function render() {
    var t = this.props.t;
    var isOpen = this.state.open;
    return _jsx("div", {
      className: "PlaylistMediaFilter"
    }, void 0, _jsx(Tooltip, {
      title: t('playlists.filter'),
      placement: "top"
    }, void 0, _jsx(IconButton, {
      className: "PlaylistMeta-iconButton",
      onClick: this.handleClick
    }, void 0, _jsx(FilterIcon, {
      nativeColor: isOpen ? '#fff' : null
    }))), React.createElement("input", {
      type: "text",
      ref: this.refInput,
      className: cx('PlaylistMediaFilter-input', isOpen && 'is-open'),
      value: this.state.value,
      onChange: this.handleChange
    }));
  };

  return PlaylistFilter;
}(React.Component);

PlaylistFilter.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired
} : {};
export default enhance(PlaylistFilter);
//# sourceMappingURL=PlaylistFilter.js.map
