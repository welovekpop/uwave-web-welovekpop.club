"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _PanelSelectActionCreators = require("../actions/PanelSelectActionCreators");

var _userSelectors = require("../selectors/userSelectors");

var _waitlistSelectors = require("../selectors/waitlistSelectors");

var _SidePanels = _interopRequireDefault(require("../components/SidePanels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  selected: function selected(state) {
    return state.selectedPanel;
  },
  waitlistPosition: _waitlistSelectors.positionSelector,
  waitlistSize: _waitlistSelectors.sizeSelector,
  listenerCount: _userSelectors.listenerCountSelector
});

function mapDispatchToProps(dispatch) {
  return {
    onChange: function onChange(panelName) {
      // Ensure that we're actually switching panels--otherwise change events
      // from eg. the chat box bubble up and trigger a panel rerender on every
      // keypress.
      if (typeof panelName === 'string') {
        dispatch((0, _PanelSelectActionCreators.selectPanel)(panelName));
      }
    }
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SidePanels.default); //# sourceMappingURL=SidePanels.js.map


exports.default = _default;
//# sourceMappingURL=SidePanels.js.map
