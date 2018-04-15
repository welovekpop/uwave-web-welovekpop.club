import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import withHandlers from 'recompose/withHandlers';
var enhance = compose(withProps(function (props) {
  return {
    onFilterDebounced: debounce(props.onFilter, 200)
  };
}), withHandlers({
  onChange: function onChange(props) {
    return function (event) {
      return props.onFilterDebounced(event.target.value);
    };
  }
}));

var Filter = function Filter(_ref) {
  var onChange = _ref.onChange;
  return _jsx("input", {
    type: "text",
    className: "AdminUserHeader-filter",
    onChange: onChange
  });
};

Filter.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: PropTypes.func.isRequired
} : {};
var ConnectedFilter = enhance(Filter);

var _ref3 =
/*#__PURE__*/
_jsx("span", {}, void 0, "Managing Users:");

var Header = function Header(_ref2) {
  var onFilter = _ref2.onFilter;
  return _jsx("div", {
    className: "AdminUserHeader"
  }, void 0, _ref3, _jsx("span", {}, void 0, "Filter User:", _jsx(ConnectedFilter, {
    onFilter: onFilter
  })));
};

Header.propTypes = process.env.NODE_ENV !== "production" ? {
  onFilter: PropTypes.func.isRequired
} : {};
export default Header;
//# sourceMappingURL=Header.js.map
