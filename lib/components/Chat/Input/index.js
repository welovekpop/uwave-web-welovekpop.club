"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _reactAbstractAutocomplete = _interopRequireWildcard(require("react-abstract-autocomplete"));

var _SuggestionsList = _interopRequireDefault(require("./SuggestionsList"));

var _EmojiSuggestion = _interopRequireDefault(require("./EmojiSuggestion"));

var _GroupSuggestion = _interopRequireDefault(require("./GroupSuggestion"));

var _UserSuggestion = _interopRequireDefault(require("./UserSuggestion"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderSuggestions = function renderSuggestions(children) {
  return (0, _jsx2.default)(_SuggestionsList.default, {}, void 0, children);
}; // User suggestions:


var getUserCompletions = function getUserCompletions(value, _ref) {
  var trigger = _ref.trigger,
      completions = _ref.completions;
  var compare = value.substr(trigger.length).toLowerCase();
  return completions.filter(function (user) {
    return user.username.substr(0, compare.length).toLowerCase() === compare;
  });
};

var getUserText = function getUserText(user, _ref2) {
  var trigger = _ref2.trigger;
  return "" + trigger + user.username + " ";
};

var renderUser = function renderUser(props) {
  return _react.default.createElement(_UserSuggestion.default, props);
}; // Group suggestions:


var renderGroup = function renderGroup(props) {
  return _react.default.createElement(_GroupSuggestion.default, props);
}; // Emoji suggestions:


var getEmojiCompletions = function getEmojiCompletions(value, _ref3) {
  var trigger = _ref3.trigger,
      completions = _ref3.completions;
  var compare = value.substr(trigger.length).toLowerCase();
  var results = completions.filter(function (emoji) {
    return emoji.shortcode.substr(0, compare.length).toLowerCase() === compare;
  });
  return (0, _sortBy.default)((0, _uniqBy.default)(results, function (emoji) {
    return emoji.image;
  }), function (emoji) {
    return emoji.shortcode.length;
  });
};

var getEmojiText = function getEmojiText(value) {
  return ":" + value.shortcode + ": ";
};

var renderEmoji = function renderEmoji(props) {
  return _react.default.createElement(_EmojiSuggestion.default, props);
};

var enhance = (0, _reactI18next.translate)();

var ChatInput =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ChatInput, _React$Component);

  function ChatInput() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      focused: false,
      value: ''
    }, _this.handleFocus = function () {
      _this.setState({
        focused: true
      });
    }, _this.handleBlur = function () {
      _this.setState({
        focused: false
      });
    }, _this.handleKeyDown = function (e) {
      e.stopPropagation();

      if (e.key === 'Enter') {
        var value = e.target.value.trim();

        if (value.length > 0) {
          _this.props.onSend(value);
        }

        _this.clear();
      }

      if (e.key === 'PageUp') {
        e.preventDefault();

        _this.props.onScroll(-1);
      }

      if (e.key === 'PageDown') {
        e.preventDefault();

        _this.props.onScroll(1);
      }

      if (e.key === 'End' && e.ctrlKey) {
        e.preventDefault();

        _this.props.onScroll('end');
      }

      if (e.key === 'Home' && e.ctrlKey) {
        e.preventDefault();

        _this.props.onScroll('start');
      }
    }, _this.handleUpdate = function (newValue) {
      _this.setState({
        value: newValue
      });
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = ChatInput.prototype;

  _proto.clear = function clear() {
    this.setState({
      value: ''
    });
  };

  _proto.render = function render() {
    var _state = this.state,
        focused = _state.focused,
        value = _state.value;
    var _props = this.props,
        t = _props.t,
        mentionableUsers = _props.mentionableUsers,
        mentionableGroups = _props.mentionableGroups,
        availableEmoji = _props.availableEmoji;
    var focusClass = focused ? 'is-focused' : '';
    return (0, _jsx2.default)("div", {
      className: (0, _classnames.default)('ChatInput', focusClass)
    }, void 0, (0, _jsx2.default)(_reactAbstractAutocomplete.default, {
      inputProps: {
        type: 'text',
        className: (0, _classnames.default)('ChatInput-input', focusClass),
        placeholder: focused ? '' : t('chat.placeholder'),
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown
      },
      onUpdate: this.handleUpdate,
      value: value,
      renderSuggestions: renderSuggestions,
      limit: 6
    }, void 0, (0, _jsx2.default)(_reactAbstractAutocomplete.Completion, {
      trigger: "@",
      minLength: 2,
      completions: mentionableUsers,
      getCompletions: getUserCompletions,
      getText: getUserText,
      renderSuggestion: renderUser
    }), (0, _jsx2.default)(_reactAbstractAutocomplete.Completion, {
      trigger: "@",
      minLength: 2,
      completions: mentionableGroups,
      renderSuggestion: renderGroup
    }), (0, _jsx2.default)(_reactAbstractAutocomplete.Completion, {
      trigger: ":",
      completions: availableEmoji,
      getCompletions: getEmojiCompletions,
      getText: getEmojiText,
      renderSuggestion: renderEmoji
    })));
  };

  return ChatInput;
}(_react.default.Component);

ChatInput.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onSend: _propTypes.default.func.isRequired,
  onScroll: _propTypes.default.func.isRequired,
  mentionableUsers: _propTypes.default.array.isRequired,
  mentionableGroups: _propTypes.default.array.isRequired,
  availableEmoji: _propTypes.default.array.isRequired
} : {};

var _default = enhance(ChatInput); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
