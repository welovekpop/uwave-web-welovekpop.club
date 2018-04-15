"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _withHandlers = _interopRequireDefault(require("recompose/withHandlers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _withProps.default)(function (props) {
  return {
    onFilterDebounced: (0, _debounce.default)(props.onFilter, 200)
  };
}), (0, _withHandlers.default)({
  onChange: function onChange(props) {
    return function (event) {
      return props.onFilterDebounced(event.target.value);
    };
  }
}));

var Filter = function Filter(_ref) {
  var onChange = _ref.onChange;
  return (0, _jsx2.default)("input", {
    type: "text",
    className: "AdminUserHeader-filter",
    onChange: onChange
  });
};

Filter.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: _propTypes.default.func.isRequired
} : {};
var ConnectedFilter = enhance(Filter);

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)("span", {}, void 0, "Managing Users:");

var Header = function Header(_ref2) {
  var onFilter = _ref2.onFilter;
  return (0, _jsx2.default)("div", {
    className: "AdminUserHeader"
  }, void 0, _ref3, (0, _jsx2.default)("span", {}, void 0, "Filter User:", (0, _jsx2.default)(ConnectedFilter, {
    onFilter: onFilter
  })));
};

Header.propTypes = process.env.NODE_ENV !== "production" ? {
  onFilter: _propTypes.default.func.isRequired
} : {};
var _default = Header; //# sourceMappingURL=Header.js.map

exports.default = _default;
//# sourceMappingURL=Header.js.map
