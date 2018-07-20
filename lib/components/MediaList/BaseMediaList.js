"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactList = _interopRequireDefault(require("react-list"));

var _reactListLazyLoad = _interopRequireDefault(require("react-list-lazy-load"));

var _immutable = _interopRequireDefault(require("item-selection/immutable"));

var _LoadingRow = _interopRequireDefault(require("./LoadingRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check if two media lists are different, taking into account
 * pagination. If the new media list contains items where the previous
 * list doesn't, but every other item is identical, we assume
 * the new list has just loaded a page that wasn't loaded in the
 * previous one, and decide that the list is not really different.
 */
function didMediaChange(prev, next) {
  return prev.some(function (item, i) {
    return item && next[i] && item._id !== next[i]._id;
  });
}

var BaseMediaList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(BaseMediaList, _React$Component);

  function BaseMediaList() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      // eslint-disable-next-line react/destructuring-assignment
      selection: (0, _immutable.default)(_this.props.media)
    };

    _this.renderList = function (items, ref) {
      var ListComponent = _this.props.listComponent;
      return _react.default.createElement(ListComponent, {
        ref: ref
      }, items);
    };

    _this.renderRow = function (index) {
      var _this$props = _this.props,
          _makeActions = _this$props.makeActions,
          _this$props$rowProps = _this$props.rowProps,
          props = _this$props$rowProps === void 0 ? {} : _this$props$rowProps,
          media = _this$props.media,
          RowComponent = _this$props.rowComponent,
          onOpenPreviewMediaDialog = _this$props.onOpenPreviewMediaDialog;
      var selection = _this.state.selection;
      var selected = selection.isSelectedIndex(index);

      if (!media[index]) {
        return (0, _jsx2.default)(_LoadingRow.default, {
          className: "MediaList-row",
          selected: selected
        }, index);
      }

      return _react.default.createElement(RowComponent, (0, _extends2.default)({
        key: media[index] ? media[index]._id : index
      }, props, {
        className: "MediaList-row",
        media: media[index],
        selected: selected,
        selection: selection.get(),
        onClick: function onClick(e) {
          return _this.selectItem(index, e);
        },
        onOpenPreviewMediaDialog: onOpenPreviewMediaDialog,
        makeActions: function makeActions() {
          return _makeActions(media[index], selection, index);
        }
      }));
    };

    return _this;
  }

  var _proto = BaseMediaList.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var media = this.props.media;
    var selection = this.state.selection;

    if (nextProps.media !== media) {
      var selectedIndices = selection.getIndices();
      var mediaChanged = didMediaChange(media, nextProps.media);
      this.setState({
        selection: mediaChanged ? (0, _immutable.default)(nextProps.media) : (0, _immutable.default)(nextProps.media, selectedIndices)
      });
    }
  };

  _proto.selectItem = function selectItem(index, e) {
    e.preventDefault();
    var selection = this.state.selection;

    if (e.shiftKey) {
      selection = selection.selectRange(index);
    } else if (e.ctrlKey) {
      selection = selection.selectToggle(index);
    } else {
      selection = selection.select(index);
    }

    this.setState({
      selection: selection
    });
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        className = _this$props2.className,
        media = _this$props2.media,
        size = _this$props2.size,
        onRequestPage = _this$props2.onRequestPage;
    var selection = this.state.selection;
    var list = (0, _jsx2.default)(_reactList.default, {
      itemsRenderer: this.renderList,
      itemRenderer: this.renderRow,
      length: size || media.length,
      type: "uniform",
      forceUpdateOnMediaChange: media,
      forceUpdateOnSelectionChange: selection
    });

    if (onRequestPage) {
      list = (0, _jsx2.default)(_reactListLazyLoad.default, {
        items: media,
        length: size || media.length,
        pageSize: 50,
        onRequestPage: onRequestPage
      }, void 0, list);
    }

    return (0, _jsx2.default)("div", {
      className: (0, _classnames.default)('MediaList', className)
    }, void 0, list);
  };

  return BaseMediaList;
}(_react.default.Component);

exports.default = BaseMediaList;

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("span", {});

BaseMediaList.defaultProps = {
  // The `size` property is only necessary for lazy loading.
  size: null,
  makeActions: function makeActions() {
    return _ref;
  }
};
BaseMediaList.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  media: _propTypes.default.array,
  size: _propTypes.default.number,
  onRequestPage: _propTypes.default.func,
  listComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]).isRequired,
  rowComponent: _propTypes.default.func.isRequired,
  rowProps: _propTypes.default.object,
  onOpenPreviewMediaDialog: _propTypes.default.func,
  makeActions: _propTypes.default.func
} : {};
//# sourceMappingURL=BaseMediaList.js.map
