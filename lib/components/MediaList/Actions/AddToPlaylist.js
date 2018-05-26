"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Action = _interopRequireDefault(require("./Action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleAdd = function handleAdd(onAdd) {
  return function (event) {
    var pos = event.target.getBoundingClientRect();
    onAdd({
      x: pos.left,
      y: pos.top
    });
  };
};

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Add.default, {});

var AddToPlaylist = function AddToPlaylist(_ref) {
  var onAdd = _ref.onAdd,
      props = (0, _objectWithoutProperties2.default)(_ref, ["onAdd"]);
  return _react.default.createElement(_Action.default, (0, _extends2.default)({}, props, {
    onAction: handleAdd(onAdd)
  }), _ref2);
};

AddToPlaylist.propTypes = process.env.NODE_ENV !== "production" ? {
  onAdd: _propTypes.default.func.isRequired
} : {};
var _default = AddToPlaylist;
exports.default = _default;
//# sourceMappingURL=AddToPlaylist.js.map
